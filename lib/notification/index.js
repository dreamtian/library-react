'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

require('rc-notification/assets/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var notification = null;
_rcNotification2['default'].newInstance({}, function (n) {
    return notification = n;
});
function open(string) {
    notification.notice({
        content: _react2['default'].createElement(
            'span',
            null,
            'simple show'
        ),
        onClose: function onClose() {
            console.log('simple close');
        }
    });
}
var NotificationApi = {
    success: function success(string) {
        return open(string);
    }
};
exports['default'] = NotificationApi;
module.exports = exports['default'];