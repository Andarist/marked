const babel = require('rollup-plugin-babel');
const license = require('rollup-plugin-license');
const { terser } = require('rollup-plugin-terser');

const createConfig = ({ output, min = false, targets }) => {
  return {
    input: 'src/marked.js',
    output: Object.assign({ name: 'marked' }, output),
    plugins: [
      license({
        banner: `
  DO NOT EDIT THIS FILE
  The code in this file is generated from files in ./src/
  `
      }),
      license({
        banner: `
  marked - a markdown parser
  Copyright (c) 2011-${new Date().getFullYear()}, Christopher Jeffrey. (MIT Licensed)
  https://github.com/markedjs/marked
  `
      }),
      babel({
        presets: [['@babel/preset-env', { loose: true, targets }]]
      }),
      min && terser({ output: { comments: /Copyright/ } })
    ].filter(Boolean)
  };
}

module.exports = [
  createConfig({
    output: {
      file: 'dist/marked-node.js',
      format: 'cjs'
    },
    targets: {
      // LTS
      node: 10
    }
  }),
  createConfig({
    output: {
      file: 'dist/marked-browser.js',
      format: 'cjs'
    }
  }),
  createConfig({
    output: {
      file: 'lib/marked.js',
      format: 'umd'
    }
  }),
  createConfig({
    output: {
      file: 'marked.min.js',
      format: 'umd'
    },
    min: true
  })
];
