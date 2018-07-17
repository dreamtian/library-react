/* eslint-disable */

const linebreak = (process.platform === 'win32') ? '\r\n' : '\n'

const autoLoadLessString = 
  `\/\*\* Dont edit this block, it\'s auto produce [[ \*\*\/${linebreak}`
  +
  `import \'\.\/style\'${linebreak}`
  +
  `\/\*\* auto produce block end ]] \*\*\/${linebreak}`

const existLess = '\'\./style\''
module.exports = {
  linebreak,
  autoLoadLessString,
  existLess
}
