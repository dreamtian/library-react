import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
// Insert one space between two chinese characters automatically.
function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }
  const SPACE = needInserted ? ' ' : '';
  // strictNullChecks oops.
  if (typeof child !== 'string' && typeof child !== 'number' &&
    isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {},
      child.props.children.split('').join(SPACE));
  }
  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }
    return <span>{child}</span>;
  }
  return child;
}


export default class Button extends React.Component {
  static defaultProps = {
    prefixCls: 'test-btn',
    nbButton: false,
    disabled: false,
    type: 'common',
    size: 'common'
  }
  static propTypes = {
    type: PropTypes.oneOf(['common', 'uncommon']),
    size: PropTypes.oneOf(['common', 'small', 'large']),
    className: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  handleClick = (e) => {
    // Add click effect
    this.setState({ clicked: true });
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => this.setState({ clicked: false }), 500);

    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  }

  isNeedInserted() {
    const { children } = this.props;
    return React.Children.count(children) === 1;
  }

  render() {
    const {text, className, prefixCls, nbButton, children, ...others} = this.props;

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-nbButton`]: nbButton
    })
    const kids = (children || children === 0)
      ? React.Children.map(children, child => insertSpace(child, this.isNeedInserted())) : null;

    return (
      <button
        className={classes}
        onClick={this.handleClick}
        {...others}
      >
        {kids}
      </button>
    );
  }
}
