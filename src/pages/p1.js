/* jshint esnext:true */

const debug = require('debug')('app:p1');
const $ = require('jquery');

module.exports = function(ctx) {
    debug("enter");
    
    $('body').empty().html("nav");
};