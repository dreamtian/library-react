'use strict';

const fs = require('fs');
const path = require('path');
const assign = require('object-assign');

module.exports = function () {
  let my = {
      "compilerOptions": {
        "strictNullChecks": true,
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "jsx": "preserve",
        "noUnusedParameters": true,
        "noUnusedLocals": true,
        "noImplicitAny": true,
        "target": "es6",
        "lib": [
          "dom",
          "es7"
        ]
      },
      "exclude": [
        "node_modules",
        "lib",
        "es"
      ]
    }
  ;
  if (fs.existsSync(path.join(process.cwd(), 'tsconfig.json'))) {
    my = require(path.join(process.cwd(), 'tsconfig.json'));
  }

  
  return assign({
    noUnusedParameters: true,
    noUnusedLocals: true,
    strictNullChecks: true,
    target: 'es6',
    jsx: 'preserve',
    moduleResolution: 'node',
    // declaration: true,
    allowSyntheticDefaultImports: true,
    allowJs: true,
  }, my.compilerOptions);
};
