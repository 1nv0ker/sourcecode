import _traverse  from '@babel/traverse'
import t from '@babel/types'
import vm from 'vm'
const traverse = _traverse.default;
import _generator from '@babel/generator'

const generator = _generator.default;
const FUN = ['Function', 'parseInt']
const funlist = new Map()
const varList = new Map()
let i = 0

function handleReturn(ast) {
    traverse(ast, {
        ReturnStatement(path) {
            const argument = path.get('argument')
            // console.log(argument)
            //处理renturn多个表达式
            if (argument.node && argument.node.type === 'SequenceExpression') {
                const expressions = argument.node.expressions
                if (expressions.length>1) {
                    for (let i=0,len=expressions.length;i<len;i++) {
                        const expression = expressions[i]
                        if(i==(len-1)) {
                            path.replaceWith(t.returnStatement(expression))
                        } else {
                            path.insertBefore(expression)
                        }
                    }
                } 
                
            } else if (argument.node && argument.node.type === 'AssignmentExpression') {
                const right = argument.node.right
                path.insertBefore(t.expressionStatement(argument.node))
                path.replaceWith(t.returnStatement(right))
            }
        },
        UnaryExpression(path) {
            // console.log(path.node)
            const argument = path.get('argument').node
            const operator =  path.node.operator
            if (argument && typeof argument.value == 'number') {
                if (operator == '!') {
                    const value = eval(operator + argument.value)
                    path.replaceWith(t.expressionStatement(t.booleanLiteral(value)))
                } else if (operator == 'void') {
                    const value = eval(operator+ ' '  + argument.value)
                
                    path.replaceWith(t.expressionStatement(t.identifier( '' +value)))
                }

                
            }
        },
        FunctionDeclaration(path) {
            const id = path.get('id').node
            const name = id.name
            const parentPath = path.parentPath.get('scope').scope
            const uid = parentPath.uid
            if (name && !funlist.has(name+'_'+uid)) {
                funlist.set(name+'_'+uid, {
                    path: path
                })
            }
            if (i === 0) {
                    
            }

        },
        VariableDeclarator(path) {
            const init = path.get('init').node
            const id = path.get('id').node
            const parentPath = path.parentPath.get('scope').scope
            const uid = parentPath.uid
            const name = id.name
            // // console.log(path.node.declarations)
            // if (init && init.type == 'LogicalExpression') {
            //     const code = generator(init, {
            //         comments: false,
            //         compact: false,
            //         minified: false,
            //         jsescOption: {
            //         minimal: false
            //         }
            //     }).code;
            //     try {
            //         const value = eval(code)
                    
            //         if (typeof value == 'function') {
            //             // console.log('value', value)
            //             if (value.name == 'defineProperty') {
            //                 path.get('init').replaceWith(t.memberExpression(t.identifier('Object'), t.identifier('defineProperty')))
            //             }
            //         } else if (typeof value == 'object') {
            //             if (value.node) {
                            
            //                 path.get('init').replaceWith(value.node)
            //             } else {
            //                 if (value === global) {
            //                     path.get('init').replaceWith(t.identifier('global'))
            //                 }
            //             }
            //             // console.log('value', value)
            //         } else if (typeof value == 'boolean') {
            //             path.get('init').replaceWith(t.booleanLiteral(value))
            //         } else if (typeof value == 'undefined') {
            //             path.get('init').replaceWith(t.identifier( '' +value))
            //         }
                    
            //     } catch {
            //         console.log('value', code)
            //     }
            // } else if (!init && path.node.declarations) {
            //     // console.log(declarations)
            // }
            if (init && (init.type === 'MemberExpression' || init.type === 'RegExpLiteral')) {
                if (!varList.has(name+'_'+uid)) {
                    varList.set(name+'_'+uid, {
                        path:path
                    })
                }
            }

        },
        LogicalExpression(path) {
           
            const code = generator(path.node, {
                comments: false,
                compact: false,
                minified: false,
                jsescOption: {
                minimal: false
                }
            }).code;
            // console.log('operator', path.node.operator)
            //     console.log('code', code)
            const left = path.node.left
            const right = path.node.right
            if ((left.type === 'CallExpression' || right.type === 'CallExpression')) {
                
            } else {
                try {
                    const value = eval(code)
                    // const script = new vm.Script(code)
                    // const value = script.runInContext({})
                    // console.log('value', value)
                    if (typeof value == 'function') {
                        // console.log('value', value)
                        if (value.name == 'defineProperty') {
                            path.get('init').replaceWith(t.memberExpression(t.identifier('Object'), t.identifier('defineProperty')))
                        }
                    } else if (typeof value == 'object') {
                        if (value.node) {
                            
                            path.get('init').replaceWith(value.node)
                        } else {
                            if (value === global) {
                                path.get('init').replaceWith(t.identifier('global'))
                            }
                        }
                        // console.log('value', value)
                    } else if (typeof value == 'boolean') {
                        path.get('init').replaceWith(t.booleanLiteral(value))
                    } else if (typeof value == 'undefined') {
                        path.get('init').replaceWith(t.identifier( '' +value))
                    }
                    
                } catch {
                    
                }
            }
        },
        BlockStatement(path) {
            // console.log(path.parentPath.node.type)
        }
        // ExpressionStatement(path) {
        //     const expression = path.get('expression').node
        //     if (expression && expression.type == 'CallExpression') {
        //         if (expression.arguments.length>0 && expression.arguments.every(item=>item.type == 'StringLiteral' || item.type == 'NumericLiteral')) {
        //             console.log('expression', expression)
        //         }
                
        //     }
        // },
        
    })
}
function calleeValue(ast) {
    traverse(ast, {
        CallExpression(path) {
            const callee = path.get('callee').node
            const args = path.node.arguments;
            if (callee && callee.name && args.length>0 && args.every(item=>item.type=='StringLiteral')) {
                const name = callee.name
                if (FUN.indexOf(name) == -1) {
                   const fun = findFun(path.parentPath, name)
                //    console.log('fun', fun.path)
                
                    if (fun.path && fun.path.node) {
                        // console.log(fun.path.node)
                        const params = fun.path.node.params
                        const code = generator(fun.path.node.body, {
                                comments: false,
                                compact: false,
                                minified: false,
                                jsescOption: {
                                minimal: false
                            }
                        }).code;
                        // console.log('code', args)
                        try {
                            const newFun = new Function(params.map(p => p.name), code)
                            const values = newFun(...args.map(item=>item.value))
                            path.replaceWith(t.stringLiteral(''+values))
                        } catch {
                            // console.log('执行错误')
                        }
                    }
                    
                }
            }
            
        },
        VariableDeclaration(path) {
            
            // const code = generator(path.node, {
            //     comments: false,
            //     compact: false,
            //     minified: false,
            //     jsescOption: {
            //         minimal: false
            //     }
            // }).code;
            // console.log('code', code)
            
        }
    })
}
function findFun(path, funName) {
    const scope = path.get('scope').scope
    const uid = scope.uid
    if (funlist.has(funName+'_'+uid)) {
        const fun = funlist.get(funName+'_'+uid)
        // console.log('fun', fun)
        return fun
    } else {
        if (path.parentPath) {
            return findFun(path.parentPath, funName)
        } else {
            return false
        }
        
    }
}
export {
    handleReturn,
    calleeValue
}