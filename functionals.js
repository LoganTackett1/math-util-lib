const functional = {};

function differentiate (funcObj) {
    if (funcObj === "INP") {
        return {input:"INP",action:"constant",param:1};
    }
    if (funcObj.action === "constant") {
        return {input:"INP",action:"constant",param:0};
    }
    if (funcObj.action === "scalarMultiply") {
        if (funcObj.input === "INP") {
            return {input:"INP",action:"constant",param:funcObj.param};
        }
        return {input:differentiate(funcObj.input),action:"scalarMultiply",param:funcObj.param};
    }
    if (funcObj.action === "scalarAdd") {
        return differentiate(funcObj.input);
    }
    if (funcObj.action === "toPower") {
        if (funcObj.input === "INP") {
            const func1 = {input:funcObj.input,action:"toPower",param:(funcObj.param-1)};
            return {input:func1,action:"scalarMultiply",param:funcObj.param};
        }
        const func1 = {input:funcObj.input,action:"toPower",param:(funcObj.param-1)};
        const func2 = differentiate(funcObj.input);
        const func3 = {input:[func1,func2],action:"multiplyFuncs"};
        return {input:func3,action:"scalarMultiply",param:funcObj.param};
    }
    if (funcObj.action === "scalarExponential") {
        if (funcObj.input === "INP") {
            return {input:funcObj,action:"scalarMultiply",param:Math.log(funcObj.param)};
        }
        const func1 = differentiate(funcObj.input);
        const func2 = {input:[funcObj,func1],action:"multiplyFuncs"};
        return {input:func2,action:"scalarMultiply",param:Math.log(funcObj.param)};
    }
    if (funcObj.action === "scalarLogarithm") {
        if (funcObj.input === "INP") {
            const func1 = {input:"INP",action:"scalarMultiply",param:Math.log(funcObj.param)};
            return {input:func1,action:"toPower",param:-1};
        }
        const func1 = {input:"INP",action:"scalarMultiply",param:Math.log(funcObj.param)};
        const func2 = {input:func1,action:"toPower",param:-1};
        const func3 = differentiate(funcObj.input);
        return {input:[func2,func3],action:"multiplyFuncs"};
    // RESUME HERE!!!
     // RESUME HERE!!!
      // RESUME HERE!!!
       // RESUME HERE!!!
       
    } if (funcObj.action === "sine") {
        const func1 = differentiate(funcObj.input);
        const func2 = {input:funcObj.input,action:"cosine"};
        return {input:[func1,func2],action:"multiplyFuncs"};
    }
    if (funcObj.action === "cosine") {
        const func1 = differentiate(funcObj.input);
        const func2 = {input:funcObj.input,action:"sine"};
        const func3 = {input:[func1,func2],action:"multiplyFuncs"};
        return {input:func3,action:"scalarMultiply",param:-1};
    }
    if (funcObj.action === "tangent") {
        const func1 = differentiate(funcObj.input);
        const func2 = {input:funcObj.input,action:"secant"};
        const func3 = {input:func2,action:"toPower",param:2};
        return {input:[func1,func3],action:"multiplyFuncs"};
    }
    if (funcObj.action === "secant") {
        const func1 = differentiate(funcObj.input);
        const func2 = {input:funcObj.input,action:"secant"};
        const func3 = {input:funcObj.input,action:"tangent"};
        return {input:[func1,func2,func3],action:"multiplyFuncs"};
    }
    if (funcObj.action === "cosecant") {
        const func1 = differentiate(funcObj.input);
        const func2 = {input:funcObj.input,action:"cosecant"};
        const func3 = {input:funcObj.input,action:"cotangent"};
        const func4 = {input:[func1,func2,func3],action:"multiplyFuncs"};
        return {input:func4,action:"scalarMultiply",param:-1};
    }
    if (funcObj.action === "cotangent") {
        const func1 = differentiate(funcObj.input);
        const func2 = {input:funcObj.input,action:"cosecant"};
        const func3 = {input:func2,action:"toPower",param:2};
        const func4 = {input:[func1,func3],action:"multiplyFuncs"};
        return {input:func4,action:"scalarMultiply",param:-1};
    }
    if (funcObj.action === "arcsine") {
        const func1 = differentiate(funcObj.input);
        const func2 = {input:{input:funcObj.input,action:"toPower",param:2},action:"scalarMultiply",param:-1};
        const func3 = {input:{input:func2,action:"scalarAdd",param:1},action:"toPower",param:-1/2};
        return {input:[func1,func3],action:"multiplyFuncs"};
    }
    if (funcObj.action === "arccosine") {
        const func1 = differentiate(funcObj.input);
        const func2 = {input:{input:funcObj.input,action:"toPower",param:2},action:"scalarMultiply",param:-1};
        const func3 = {input:{input:func2,action:"scalarAdd",param:1},action:"toPower",param:-1/2};
        const func4 = {input:func3,action:"scalarMultiply",param:-1};
        return {input:[func1,func4],action:"multiplyFuncs"};
    }
    if (funcObj.action === "arctangent") {
        const func1 = differentiate(funcObj.input);
        const func2 = {input:funcObj.input,action:"toPower",param:2};
        const func3 = {input:{input:func2,action:"scalarAdd",param:1},action:"toPower",param:-1};
        return {input:[func1,func3],action:"multiplyFuncs"};
    }
    if (funcObj.action === "addFuncs") {
        const newFuncs = [];
        for (let func of funcObj.input) {
            newFuncs.push(differentiate(func));
        }
        return {input:newFuncs,action:"addFuncs"};
    }
    if (funcObj.action === "multiplyFuncs") {
        const newFuncs = [];
        for (let i = 0; i < funcObj.input.length; i++) {
            const der = differentiate(funcObj.input[i]);
            newFuncs.push({input:[...funcObj.input.slice(i,i+1),der],action:"multiplyFuncs"});
        }
        return {input:newFuncs,action:"addFuncs"};
    }
    if (funcObj.action === "funcToFunc") {
        const func1 = funcObj.input[0];
        const func2 = funcObj.input[1];

        const func3 = {input:[func2,{input:func1,action:"scalarLogarithm",param:Math.E}],action:"multiplyFuncs"};
        return {input:[funcObj,differentiate(func3)],action:"multiplyFuncs"};
    }
}

functional.differentiate = differentiate;

module.exports = functional;