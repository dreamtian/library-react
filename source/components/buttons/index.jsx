import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Button extends React.Component {
  static defaultProps = {
    type: 'common',
    size: 'common',
    text: '确认'
  }
  static propTypes = {
    type: PropTypes.oneOf(['common', 'uncommon']),
    size: PropTypes.oneOf(['common', 'small', 'large']),
    text: PropTypes.string
  }
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleClick = () => {
    const {onClick} = this.props
    if (onClick) {
      onClick()
    }
  }
  render () {
    const {text} = this.props
    return (
      <div className='test' onClick= {this.handleClick}>{text}</div>
    )
  }
}
