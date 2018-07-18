import React from 'react';
import Notification from 'rc-notification';
import 'rc-notification/assets/index.css';
var notification = null;
Notification.newInstance({}, function (n) {
    return notification = n;
});
function open(string) {
    notification.notice({
        content: React.createElement(
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
export default NotificationApi;