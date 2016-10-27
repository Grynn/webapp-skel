const $ = require('jquery');
const page = require('page');
const debug = require('debug')('app');

class App {

  constructor() {
    debug('::constructor() called');
    page(require('./middleware/logger')); // eslint-disable-line global-require
    page('/', require('./pages/p1.js'));

    $(document).ready(() => {
      debug('document.ready');
      page();
    });
  }

}

export default new App();
