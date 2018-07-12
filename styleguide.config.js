const path = require('path')
// const glob = require('glob')
const camelCase = require('lodash/camelCase')
const upperFirst = require('lodash/upperFirst')
const { styles, theme } = require('./styleguide.styles')
const { version } = require('./package.json')

// var componentStyles = glob.sync('source/components/**/index.less').map(file => path.resolve(__dirname, file))

module.exports = {
  title: `tuia ${version}`,
  template: './styleguide.template.html',
  editorConfig: { theme: 'cobalt' },
  serverPort: 3000,
  showUsage: true,
  styles,
  theme,
  require: [
  ],
  getComponentPathLine: (componentPath) => {
    const dirname = path.dirname(componentPath, '.js')
    const name = dirname.split('/').slice(-1)[0]
    const componentName = upperFirst(camelCase(name))

    return 'import ' + componentName + ' from \'tuia/' + name + '\''
  },
  styleguideComponents: {
    // Logo: path.join(__dirname, 'lib/components/logo')
  },
  sections: [
    {
      name: '',
      content: 'source/components/readme.md'
    },
    {
      name: 'Basic',
      components: () => ([
        // add the component like this
        // it can read the md file and generate the corresponding document on the website
        path.resolve(__dirname, 'source/components/button', 'index.jsx')
      ])
    },
    {
      name: 'Form',
      components: () => ([
        // TODO : Input, Radio, Checkbox, Switch, Table, Select, DataPicker, TimePicker, RegionPicker, Cascader, Upload, Form

      ])
    },
    {
      name: 'Navigation',
      components: () => ([
        // TODO : Menu, Tabs, Breadcrumb, Pagenation
      ])
    },
    {
      name: 'View',
      components: () => ([
        // TODO : Message, Notice, Modal, Tag, Tooltip, Poptip, Poptip, Spin
      ])
    },
    {
      name: 'Other',
      comments: () => ([

      ])
    }
  ],
  webpackConfig: {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  'latest',
                  'stage-0',
                  'react'
                ]
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  'latest',
                  'stage-0',
                  'react'
                ]
              }
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          loader: ['style-loader', 'css-loader', 'less-loader']
        }
      ]
    }
  }
}
