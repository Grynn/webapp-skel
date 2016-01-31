/* route middleware for page.js
 * logs the ctx object 
 */
/* jshint esnext:true */

const debug = require('debug')('app:route');

module.exports = function logger(ctx,next) {
    debug(ctx); 
    next();
};