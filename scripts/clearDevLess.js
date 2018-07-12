/* eslint-disable */
const fs = require('fs');
const path = require('path');
const strings = require('./strings');

// remove auto loaded less
const componentsPath = path.join(process.cwd(), '/source/components');

fs.readdir(componentsPath, function (err, files) {
  files.forEach(function (file) {
    let jsxPath = path.join(componentsPath, file, 'index.jsx');
    let tsxPath = path.join(componentsPath, file, 'index.tsx');
    let fullPath = fs.existsSync(jsxPath) ? jsxPath : fs.existsSync(tsxPath) ? tsxPath : false;
    
    if (fullPath && fs.existsSync(path.join(componentsPath, file, 'style', 'index.less'))) {
      fs.readFile(fullPath, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        if(data.indexOf(strings.autoLoadLessString) > -1) {
          let removeLess = data.replace(strings.autoLoadLessString, '');

          fs.writeFile(fullPath, removeLess, 'utf8', err => {
            if (err) return console.log(err)
          })
        }
      });
    }
  });
});