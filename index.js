'use strict';
module.exports = typeof navigator !== 'undefined' && /Firefox\/[\d\.]+.*/.test(navigator.userAgent);
