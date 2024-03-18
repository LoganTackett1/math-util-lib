const Rfuncs = {};

// This function returns a scalar no matter the input
Rfuncs.constant = (scalar) => {
    return (inp) => {
        return scalar;
    }
}

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

Rfuncs.sine = function (inp) {
    if (typeof inp === "function") {
        return (val) => {
            return Math.sin(inp(val));
        }
    } else {
        return Math.sin(inp);
    }
}

Rfuncs.cosecant = function (inp) {
    if (typeof inp === "function") {
        return (val) => {
            return 1/Math.sin(inp(val));
        }
    } else {
        return 1/Math.sin(inp);
    }
}

Rfuncs.cosine = function (inp) {
    if (typeof inp === "function") {
        return (val) => {
            return Math.cos(inp(val));
        }
    } else {
        return Math.cos(inp);
    }
}

Rfuncs.secant = function (inp) {
    if (typeof inp === "function") {
        return (val) => {
            return 1/Math.cos(inp(val));
        }
    } else {
        return 1/Math.cos(inp);
    }
}

Rfuncs.tangent = function (inp) {
    if (typeof inp === "function") {
        return (val) => {
            return Math.tan(inp(val));
        }
    } else {
        return Math.tan(inp);
    }
}

Rfuncs.cotangent = function (inp) {
    if (typeof inp === "function") {
        return (val) => {
            return 1/Math.tan(inp(val));
        }
    } else {
        return 1/Math.tan(inp);
    }
}

Rfuncs.arcsine = function (inp) {
    if (typeof inp === "function") {
        return (val) => {
            return Math.asin(inp(val));
        }
    } else {
        return Math.asin(inp);
    }
}

Rfuncs.arccosine = function (inp) {
    if (typeof inp === "function") {
        return (val) => {
            return Math.acos(inp(val));
        }
    } else {
        return Math.acos(inp);
    }
}

Rfuncs.arctangent = function (inp) {
    if (typeof inp === "function") {
        return (val) => {
            return Math.atan(inp(val));
        }
    } else {
        return Math.atan(inp);
    }
}

module.exports = Rfuncs;