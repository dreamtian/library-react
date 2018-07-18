/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */
import Notification from 'rc-notification'
import 'rc-notification/assets/index.css'

let notification = null
Notification.newInstance({}, function (n) {
  notification = n
})

function open (string) {
  notification.notice({
    content: <span>simple show</span>,
    onClose () {
      console.log('simple close')
    }
  })
}

const NotificationApi = {
  success: (string) => open(string)
}

export default NotificationApi
