/**
 * Module Dependencies
 */

var read = require('fs').readFileSync;
var join = require('path').join;
var assert = require('assert');
var whitespace = require('..');
var Duo = require('duo');

/**
 * Tests
 */

describe('whitespace', function() {

  it('should compile *.styl files', function(done) {

    var expected = read(join(__dirname, 'index.css'), 'utf8');

    Duo(__dirname)
      .entry('index.styl')
      .use(whitespace())
      .run(function(err, css) {
        if (err) return done(err);
        assert(css == expected.trim());
        done();
      })
  })

})
