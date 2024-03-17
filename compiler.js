const actionsObj = require('./actionsObj');

function compileFunc (funcObj) {
    if (funcObj === "INP") {
        return function (inp) {
            return inp;
        }
    } else if (funcObj.input === "INP") {
        if ('param' in funcObj) {
            return actionsObj[funcObj.action](funcObj.param);
        } else {
            return actionsObj[funcObj.action];
        }
    } else if (Array.isArray(funcObj.input)) {
        const compiledArr = funcObj.input.map(inp => compileFunc(inp));
        if ('param' in funcObj) {
            return actionsObj[funcObj.action](funcObj.param)(...compiledArr);
        } else {
            return actionsObj[funcObj.action](...compiledArr);
        }
    } else {
        if ('param' in funcObj) {
            return actionsObj[funcObj.action](funcObj.param)(compileFunc(funcObj.input));
        } else {
            return actionsObj[funcObj.action](compileFunc(funcObj.input));
        }
    }
}

module.exports = compileFunc;
