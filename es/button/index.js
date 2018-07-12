import _extends from 'babel-runtime/helpers/extends';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child, needInserted) {
    // Check the child if is undefined or null.
    if (child == null) {
        return;
    }
    var SPACE = needInserted ? ' ' : '';
    // strictNullChecks oops.
    if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
    }
    if (typeof child === 'string') {
        if (isTwoCNChar(child)) {
            child = child.split('').join(SPACE);
        }
        return React.createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.handleClick = function (e) {
            // Add click effect
            _this.setState({ clicked: true });
            clearTimeout(_this.timeout);
            _this.timeout = window.setTimeout(function () {
                return _this.setState({ clicked: false });
            }, 500);
            var onClick = _this.props.onClick;

            if (onClick) {
                onClick(e);
            }
        };
        _this.state = {
            clicked: false
        };
        return _this;
    }

    _createClass(Button, [{
        key: 'isNeedInserted',
        value: function isNeedInserted() {
            var children = this.props.children;

            return React.Children.count(children) === 1;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                text = _a.text,
                className = _a.className,
                prefixCls = _a.prefixCls,
                nbButton = _a.nbButton,
                children = _a.children,
                others = __rest(_a, ["text", "className", "prefixCls", "nbButton", "children"]);
            var classes = classNames(prefixCls, className, _defineProperty({}, prefixCls + '-nbButton', nbButton));
            var kids = children || children === 0 ? React.Children.map(children, function (child) {
                return insertSpace(child, _this2.isNeedInserted());
            }) : null;
            return React.createElement(
                'button',
                _extends({ className: classes, onClick: this.handleClick }, others),
                kids
            );
        }
    }]);

    return Button;
}(React.Component);

export default Button;

Button.defaultProps = {
    prefixCls: 'test-btn',
    nbButton: false,
    disabled: false,
    type: 'common',
    size: 'common'
};
Button.propTypes = {
    type: PropTypes.oneOf(['common', 'uncommon']),
    size: PropTypes.oneOf(['common', 'small', 'large']),
    className: PropTypes.string
};