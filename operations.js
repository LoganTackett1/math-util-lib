const operations = {};

operations.addFuncs = (...params) => {
    // returns the function that takes an input, plugs it into both functions and adds the results.
    return function (inp) {
        let result = 0;
        for (let func of params) {
            result += func(inp);
        }
        return result;
    }
}

operations.multiplyFuncs = (...params) => {
    // returns the function that takes an input, plugs it into both functions and multiplies the results.
    return function (inp) {
        let result = 1;
        for (let func of params) {
            result *= func(inp);
        }
        return result;
    }
}

operations.funcToFunc = (func1,func2) => {
    return function (inp) {
        return func1(inp) ** func2(inp);
    }
}

module.exports = operations;