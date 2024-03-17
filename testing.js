const compiler = require('./compiler');

const func1 = {input:"INP",action:"toPower",param:2};
const func2 = {input:["INP",func1],action:"addFuncs"};
const func3 = {input:func2,action:"scalarAdd",param:-1};

const func4 = {input:"INP",action:"toPower",param:3};
const func5 = {input:"INP",action:"scalarMultiply",param:-1};
const func6 = {input:[func4,func5],action:"addFuncs"};
const func7 = {input:func6,action:"toPower",param:-1};

const func8 = {input:[func3,func7],action:"multiplyFuncs"};

const compiled = compiler(func8);

console.log(compiled(3));
