/**
 * Module Dependencies
 */

var compile = require('css-whitespace');

/**
 * Expose `whitespace`
 */

module.exports = whitespace;

/**
 * Compile whitespace-significant CSS
 * to valid CSS
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */

function whitespace(opts) {
  opts = opts || {};
  var type = opts.type || 'styl';

  return function (file) {
    if (file.type != type) return;
    file.src = compile(file.src);
    file.type = 'css';
  }
}
