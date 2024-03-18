const compiler = require('./compiler');
const functional = require('./functionals');

function DIFF (func) {
    return functional.differentiate(func);
}

const func1 = {input:"INP",action:"sine"};

console.log(compiler(DIFF(DIFF(DIFF(func1))))(0.2));

