import {
  nodeResolve
} from '@rollup/plugin-node-resolve';

import typescript from '@rollup/plugin-typescript';

export default {
  input: 'dist/index.js',
  output: [{
      format: 'umd',
      file: 'pg-data-utils.umd.js',
      name: 'pgDataUtils'
    },
    {
      format: 'es',
      file: 'pg-data-utils.module.js'
    }
  ],
  onwarn(warning, warn) {
    // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
    if (warning.code === 'THIS_IS_UNDEFINED') return

    warn(warning)
  },
  plugins: [
    nodeResolve(),
    typescript()
  ]
}