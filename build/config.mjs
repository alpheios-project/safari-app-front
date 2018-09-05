import path from 'path'
const projectRoot = process.cwd()

const webpack = {
  common: {
    context: path.join(projectRoot, 'src'),
    entry: './index.js',
    resolve: {
      alias: {
        'alpheios-data-models': path.join(projectRoot, 'node_modules/alpheios-data-models/dist/alpheios-data-models.js'),
        'alpheios-components': path.join(projectRoot, 'node_modules/alpheios-components/dist/alpheios-components.js'),
        '@': path.join(projectRoot, 'src')
      }
    }
  },

  production: {
    mode: 'production',
    output: {filename: 'script.js'}
  },

  development: {
    mode: 'development',
    output: {filename: 'script.js'}
  }
}

export { webpack }
