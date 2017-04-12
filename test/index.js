var test = require('tape')
var data = require('../dist/main.js')

test('empty arg', (t) => {
  t.ok(data.namedays)
  t.ok(data.extNamedays)
  t.end()
})
