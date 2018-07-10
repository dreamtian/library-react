import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)
function isString (str : any) {
  return typeof str === 'string'
}

// Insert one space between two chinese characters automatically.
function insertSpace (child : any, needInserted : any) {
  // Check the child if is undefined or null.
  if (child == null) {
    return
  }
  const SPACE = needInserted ? ' ' : ''
  // strictNullChecks oops.
  if (typeof child !== 'string' && typeof child !== 'number' &&
    isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {},
      child.props.children.split('').join(SPACE))
  }
  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE)
    }
    return <span>{child}</span>
  }
  return child
}

export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger';
export type ButtonShape = 'circle' | 'circle-outline';
export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonHTMLType = 'submit' | 'button' | 'reset';

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: string;
  shape?: ButtonShape;
  size?: ButtonSize;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  text?: string;
  nbButton?: any;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = NativeButtonProps;

export default class Button extends React.Component<ButtonProps, any> {
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
    className: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    icon: PropTypes.string,
  }

  timeout: number;

  constructor (props : ButtonProps) {
    super(props)
    this.state = {
      clicked: false
    }
  }
  handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    // Add click effect
    this.setState({ clicked: true })
    clearTimeout(this.timeout)
    this.timeout = window.setTimeout(() => this.setState({ clicked: false }), 500)

    const { onClick } = this.props
    if (onClick) {
      (onClick  as React.MouseEventHandler<HTMLButtonElement>)(e)
    }
  }

  isNeedInserted () {
    const { children } = this.props
    return React.Children.count(children) === 1
  }

  render () {
    const {text, className, prefixCls, nbButton, children, ...others} = this.props

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-nbButton`]: nbButton
    })
    const kids = (children || children === 0)
      ? React.Children.map(children, child => insertSpace(child, this.isNeedInserted())) : null

    return (
      <button
        className={classes}
        onClick={this.handleClick}
        {...others}
      >
        {kids}
      </button>
    )
  }
}
