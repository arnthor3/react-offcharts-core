"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var round = exports.round = function round(a) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Math.round((a + 0.00001) * 10) / 10;
};

var split = exports.split = function split(num, deliminator) {
  var n = num.toString().split(deliminator);
  return { number: n[0], fraction: n[1] };
};