import React from 'react'
import PropTypes from 'prop-types'
import NotificationApi from './index'

export default class NotificationDemo extends React.Component {
  static propTypes = {
    content: PropTypes.string
  }

  render () {
    return (
      <div>
        <button onClick={() => NotificationApi.success('123')}>click me</button>
      </div>
    )
  }
}
