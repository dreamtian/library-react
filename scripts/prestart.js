#!/usr/bin/env node

/* eslint-disable */
'use strict';

const fs = require('fs');
const path = require('path');
const packageInfo = require('../package.json');
const strings = require('./strings');


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
        if(!data.match(`import \'\.\/style\'${strings.linebreak}`)) {
          let addLess = 
            strings.autoLoadLessString
            +
            data;

          fs.writeFile(fullPath, addLess, 'utf8', err => {
            if (err) return console.log(err)
          })
        }
        // var result = data.replace(/string to be replaced/g, 'replacement');
      
      });
    }
  });
});
