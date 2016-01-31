/* jshint esnext:true */
const $     = require('jquery');
const page  = require('page');
const debug = require('debug')('app');

class App {
    constructor() {
        debug("::constructor() called");
        require('./routes.js');
        $(document).ready(function() {
            debug("ready!");
            page();
        });
    }
}

export default new App();