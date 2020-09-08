'use strict';

module.exports = bitmasks;

function bitmasks(value, mask) {
    return (value & mask) === mask;
}
