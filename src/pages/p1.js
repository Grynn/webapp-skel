const debug = require('debug')('app:p1');
const $ = require('jquery');

module.exports = function p1(/* ctx, next */) {
  debug('enter');
  $('body').html('<h1>Hello World</h1>');
};
