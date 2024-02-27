const songRouter = require('./song');
const siteRouter = require('./site');

function route(app) {
    app.use('/song', songRouter);

    app.use('/', siteRouter);
}

module.exports = route;
