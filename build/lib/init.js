
'use strict';

// from publish-please

const path = require('path');
const writeFile = require('fs').writeFileSync;
const chalk = require('chalk');
const getNpmArgs = require('./utils/get-npm-args');

const pathJoin = path.join;

function init() {
  // NOTE: <projectDir>/build/lib
  const projectDir = pathJoin(__dirname, '../../');

  const cfg = require(path.join(projectDir, 'package.json'));

  if (!cfg) {
    process.exit(1);
  }
}

init();
