import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import NotificationApi from './index';

var NotificationDemo = function (_React$Component) {
    _inherits(NotificationDemo, _React$Component);

    function NotificationDemo() {
        _classCallCheck(this, NotificationDemo);

        return _possibleConstructorReturn(this, (NotificationDemo.__proto__ || Object.getPrototypeOf(NotificationDemo)).apply(this, arguments));
    }

    _createClass(NotificationDemo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return NotificationApi.success('123');
                        } },
                    'click me'
                )
            );
        }
    }]);

    return NotificationDemo;
}(React.Component);

export default NotificationDemo;

NotificationDemo.propTypes = {
    content: PropTypes.string
};