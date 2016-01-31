/* jshint esnext:true */
const page = require('page');
const $     = require('jquery');

page(require("./middleware/logger.js"));
page("/p1", navbar, require("./pages/p1.js"));
page("/p2", navbar, require("./pages/p1.js"));
page(notfound);

//page("/p2", require("./pages/p2.js"));
function notfound() {
    $('body').empty().html("<div>Page not found</div>");
}

function navbar(ctx, next) {
    $('body').append(`
        <div class="nav navbar">
            <ul>
                <li><a href="/p1">p1</a></li>
                <li><a href="/p2">p2</a></li>
            </ul>
        </div>
    `);
}