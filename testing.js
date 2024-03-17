const compiler = require('./compiler');

const func1 = {input:"INP",action:"sine"};
const func2 = {input:func1,action:"arcsine"};

const compiled = compiler(func2);

console.log(compiled(0.2));
