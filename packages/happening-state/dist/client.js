'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _howard = require('howard');

var api = (0, _howard.withDefaults)({
  url: 'http://localhost:9000/api/v1'
});

var apiFetch = function apiFetch(path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _howard.json)(api(path, options));
};

exports.default = apiFetch;
module.exports = exports['default'];