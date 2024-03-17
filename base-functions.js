const Rfuncs = {};

Rfuncs.scalarMultiply = (scalar) => {
    // return the function that scales an input by a scalar
    return function (inp) {
        if (typeof inp === "function") {
            return (val) => {
                return inp(val) * scalar;
            }
        } else {
            return inp * scalar;
        }
    }
}

Rfuncs.scalarAdd = (scalar) => {
    // return the function that scales an input by a scalar
    return function (inp) {
        if (typeof inp === "function") {
            return (val) => {
                return inp(val) + scalar;
            }
        } else {
            return inp + scalar;
        }
    }
}

Rfuncs.toPower = (power) => {
    // return the function that takes an input and returns it to that power
    return function (inp) {
        if (typeof inp === "function") {
            return (val) => {
                return inp(val) ** power;
            }
        } else {
            return inp ** power;
        }
    }
}

Rfuncs.scalarExponential = (base) => {
    return function (inp) {
        if (typeof inp === "function") {
            return (val) => {
                return base**inp(val);
            }
        } else {
            return base**inp;
        }
    }
}

Rfuncs.scalarLogarithm = (base) => {
    return function (inp) {
        if (typeof inp === "function") {
            return (val) => {
                return Math.log(inp(val))/Math.log(base);
            }
        } else {
            return Math.log(inp)/Math.log(base);
        }
    }
}

module.exports = Rfuncs;