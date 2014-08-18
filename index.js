/**
 * Module Dependencies
 */

var compile = require('css-whitespace');

/**
 * Expose `plugin`
 */

module.exports = plugin;

/**
 * Compile whitespace-significant CSS
 * to valid CSS
 *
 * @param {Object} opts
 * @return {Function}
 * @api public
 */

function plugin(opts) {
  opts = opts || {};
  var type = opts.type || 'styl';

  return function whitespace(file) {
    if (file.type != type) return;
    file.src = compile(file.src);
    file.type = 'css';
  }
}
