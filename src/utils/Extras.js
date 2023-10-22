const stringValidation = {
    isString(value) {
        if (typeof value !== 'string') {
            throw new Error(" must be a string")
        }
    }
}

const nonNullStringValidation = {
    len: {
        args: [3],
        msg: " must be more than two characters"
    },
    notEmpty: {
        args: true,
        msg: " must not be empty"
    },
    ...stringValidation
}

module.exports = {
    nonNullStringValidation,
    stringValidation
}