'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var NotificationDemo = function (_React$Component) {
    (0, _inherits3['default'])(NotificationDemo, _React$Component);

    function NotificationDemo() {
        (0, _classCallCheck3['default'])(this, NotificationDemo);
        return (0, _possibleConstructorReturn3['default'])(this, (NotificationDemo.__proto__ || Object.getPrototypeOf(NotificationDemo)).apply(this, arguments));
    }

    (0, _createClass3['default'])(NotificationDemo, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'button',
                    { onClick: function onClick() {
                            return _index2['default'].success('123');
                        } },
                    'click me'
                )
            );
        }
    }]);
    return NotificationDemo;
}(_react2['default'].Component);

exports['default'] = NotificationDemo;

NotificationDemo.propTypes = {
    content: _propTypes2['default'].string
};
module.exports = exports['default'];