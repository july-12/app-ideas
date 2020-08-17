'use strict';

module.exports = bin2Dec;

function bin2Dec(value) {
    // binary: 1 or 0, just check length less than 8
    const isValidBinary = /^[10]{1,8}$/.test(value);
    if (isValidBinary) {
        let decimal = 0;
        for (let index = 0; index < value.length; index++) {
            let v = value[index];
            if (+v === 1) {
                decimal += v << (value.length - 1 - index);
            }
        }
        return decimal;
    }
    return null;
}
