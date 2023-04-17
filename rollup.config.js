import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'
import path from 'path'
import pkg from './package.json' assert { type: 'json' }

const isProd = process.env.NODE_ENV === 'production'

const banner = `/**
 * utils-cli v${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`

export default [
  {
    input: path.resolve('./index.ts'),
    output: [
      {
        banner,
        file: 'dist/index.min.js',
        name: 'eeoUtils',
        format: 'umd',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),

      commonjs(),
      typescript({ tsconfig: path.resolve('./tsconfig.json') }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
        extensions: ['.ts'],
      }),
      isProd && terser(),
      del({ targets: 'dist/*' }),
    ],
  },
  {
    // 生成 .d.ts 类型声明文件
    input: path.resolve('./index.ts'),
    output: {
      file: pkg.types,
      format: 'es',
    },
    plugins: [
      dts.default(),
      del({
        targets: ['./dist/src'],
        hook: 'buildEnd',
      }),
    ],
  },
]
