var tap = require('tap')
var init = require('../')
var rimraf = require('rimraf')

var EXPECT = {
    name: 'test',
    version: '1.0.0',
    description: '',
    author: '',
    scripts: { test: 'echo "Error: no test specified" && exit 1' },
    dependencies: {},
    main: 'basic.js',
    keywords: [],
    license: 'SEE LICENSE IN LICENSE'
}

tap.test('--yes defaults', function (t) {
  init(__dirname, __dirname, {yes: 'yes'}, function (er, data) {
    if (er) throw er

    t.has(data, EXPECT, 'used the default data')
    t.end()
  })
})

tap.test('teardown', function (t) {
  rimraf(__dirname + '/package.json', t.end.bind(t))
})
