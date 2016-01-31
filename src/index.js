//stuff that should be in the base bundle
require('jquery');
require('debug');
require('page');

require.ensure(['./app.js'], function() {
    require('./app.js');
});