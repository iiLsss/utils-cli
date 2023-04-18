const gulp = require('gulp')
const path = require('path')
const rimraf = require('rimraf')
const ts = require('gulp-typescript')
const babel = require('gulp-babel')
const merge2 = require('merge2')
const { compilerOptions } = require('./tsconfig.json')

const tsConfig = {
  noUnusedParameters: false,
  noUnusedLocals: false,
  strictNullChecks: true,
  target: 'es6',
  moduleResolution: 'node',
  declaration: true,
  allowSyntheticDefaultImports: true,
  ...compilerOptions,
}

function getBabelConfig(modules) {
  return  {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: '> 0.5%, last 2 versions, ie >= 11',
            node: 'current',
          },
          modules
        },
      ],
      '@babel/preset-typescript',
    ],
  }
}

const source = [
  'src/**/*.ts',
]
const base = path.join(process.cwd(), 'src')
function getProjectPath(filePath) {
  return path.join(process.cwd(), filePath)
}
const libDir = getProjectPath('lib')
const esDir = getProjectPath('es')

gulp.task('compile-with-es', (done) => {
  console.log('Compile to es...')
  compile(false).on('finish', done)
})

gulp.task('compile-with-lib', (done) => {
  console.log('Compile to js...')
  compile().on('finish', done)
})
gulp.task('compile', gulp.parallel( 'compile-with-lib', 'compile-with-es'))

function compile(modules) {
  const targetDir = modules === false ? esDir : libDir
  // const targetDir =  libDir
  rimraf.sync(targetDir)
  const { js, dts } = gulp.src(source, { base }).pipe(ts(tsConfig))
  const dtsFilesStream = dts.pipe(gulp.dest(targetDir))
  let jsFilesStream = js.pipe(babel(getBabelConfig(modules)))
  jsFilesStream = jsFilesStream.pipe(gulp.dest(targetDir))
  return merge2([jsFilesStream, dtsFilesStream])
}
