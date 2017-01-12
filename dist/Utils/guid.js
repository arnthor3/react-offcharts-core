"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var r = function r() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

exports.default = function () {
  return "" + r() + r() + r() + r();
};