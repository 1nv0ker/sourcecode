import fs from 'fs'
import { parse } from '@babel/parser'
import _generator from '@babel/generator'
import { handleReturn, calleeValue} from './dev.js'

const generator = _generator.default;

const inputFile = './popup.js'

const code = fs.readFileSync(inputFile, 'utf-8');


function parseCode(source) {
    
    const ast = parse(source, {
        sourceType: 'script',
        allowReturnOutsideFunction: true,
        allowImportExportEverywhere: true,
        plugins: ['jsx', 'typescript', 'classProperties', 'dynamicImport']
    });
    handleReturn(ast)
    calleeValue(ast)
    return generator(ast, {
        comments: false,
        compact: false,
        minified: false,
        jsescOption: {
        minimal: false
        }
    }).code;

}

const transformedCode = parseCode(code)

fs.writeFileSync('./popup_dev.js', transformedCode);