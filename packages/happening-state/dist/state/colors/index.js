'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = exports.delColor = exports.addColor = exports.editColor = exports.readColor = exports.browseColors = exports.delHandler = exports.editHandler = exports.addHandler = exports.readHandler = exports.browseHandler = exports.browseError = exports.browseEnd = exports.browseStart = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cooldux = require('cooldux');

var _immutable = require('immutable');

var _client = require('../../client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _promiseHandler = (0, _cooldux.promiseHandler)('browse', 'colors');

var browseStart = _promiseHandler.browseStart,
    browseEnd = _promiseHandler.browseEnd,
    browseError = _promiseHandler.browseError,
    browseHandler = _promiseHandler.browseHandler;
exports.browseStart = browseStart;
exports.browseEnd = browseEnd;
exports.browseError = browseError;
exports.browseHandler = browseHandler;

var _promiseHandler2 = (0, _cooldux.promiseHandler)('read', 'colors');

var readHandler = _promiseHandler2.readHandler;
exports.readHandler = readHandler;

var _promiseHandler3 = (0, _cooldux.promiseHandler)('edit', 'colors');

var addHandler = _promiseHandler3.addHandler;
exports.addHandler = addHandler;

var _promiseHandler4 = (0, _cooldux.promiseHandler)('add', 'colors');

var editHandler = _promiseHandler4.editHandler;
exports.editHandler = editHandler;

var _promiseHandler5 = (0, _cooldux.promiseHandler)('del', 'colors');

var delHandler = _promiseHandler5.delHandler;
exports.delHandler = delHandler;
var browseColors = exports.browseColors = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _client2.default)('/colors');

          case 2:
            data = _context.sent;
            return _context.abrupt('return', browseHandler(data, dispatch));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function browseColors(_x) {
    return _ref.apply(this, arguments);
  };
}();

var readColor = exports.readColor = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, id) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = readHandler;
            _context2.next = 3;
            return (0, _client2.default)('/colors/' + id);

          case 3:
            _context2.t1 = _context2.sent;
            _context2.t2 = dispatch;
            return _context2.abrupt('return', (0, _context2.t0)(_context2.t1, _context2.t2));

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function readColor(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var editColor = exports.editColor = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, id, payload) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = editHandler;
            _context3.next = 3;
            return (0, _client2.default)('/colors/' + id, { method: 'POST', payload: payload });

          case 3:
            _context3.t1 = _context3.sent;
            _context3.t2 = dispatch;
            return _context3.abrupt('return', (0, _context3.t0)(_context3.t1, _context3.t2));

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function editColor(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var addColor = exports.addColor = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, id, payload) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.t0 = addHandler;
            _context4.next = 3;
            return (0, _client2.default)('/colors', { method: 'POST', payload: payload });

          case 3:
            _context4.t1 = _context4.sent;
            _context4.t2 = dispatch;
            return _context4.abrupt('return', (0, _context4.t0)(_context4.t1, _context4.t2));

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function addColor(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

var delColor = exports.delColor = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, id) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.t0 = delHandler;
            _context5.next = 3;
            return (0, _client2.default)('/colors/' + id, { method: 'DELETE ' });

          case 3:
            _context5.t1 = _context5.sent;
            _context5.t2 = dispatch;
            return _context5.abrupt('return', (0, _context5.t0)(_context5.t1, _context5.t2));

          case 6:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function delColor(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

var initialState = {
  browseError: null,
  readError: null,
  editError: null,
  addError: null,
  delError: null
};

var colors = exports.colors = function colors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case browseStart.type:
      return _extends({}, state, { isFetching: true });
    case browseEnd.type:
      return _extends({}, state, { isFetching: false, data: (0, _immutable.fromJS)(action.payload), error: false });
    case browseError.type:
      return _extends({}, state, { isFetching: false, error: (0, _immutable.fromJS)(action.payload) });
    default:
      return state;
  }
};