const path = require('path')
const camelCase = require('lodash/camelCase')
const upperFirst = require('lodash/upperFirst')
const { styles, theme } = require('./styleguide.styles')
const { version } = require('./package.json')

module.exports = {
  title: `tuia ${version}`,
  template: './styleguide.template.html',
  editorConfig: { theme: 'cobalt' },
  serverPort: 3000,
  showUsage: true,
  styles,
  theme,
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
      name: 'General',
      components: () => ([
        // add the component like this
        // it can read the md file and generate the corresponding document on the website
        path.resolve(__dirname, 'source/components/buttons', 'index.jsx')
      ])
    },
    {
      name: 'Layout',
      components: () => ([

      ])
    },
    {
      name: 'Navigation',
      components: () => ([

      ])
    },
    {
      name: 'Data Entry',
      components: () => ([

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
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}
