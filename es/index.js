'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buttons = require('./buttons');

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_buttons)['default'];
  }
});

var _testc = require('./testc');

Object.defineProperty(exports, 'Testc', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_testc)['default'];
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }