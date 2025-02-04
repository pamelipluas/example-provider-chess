const app = require('express')();
const cors = require('cors');
const routes = require('./src/opening/opening.routes');
const authMiddleware = require('./src/middleware/auth.middleware');

const port = 8080;

const init = () => {
    app.use(cors());
    app.use(routes);
    app.use(authMiddleware);
    return app.listen(port, () => console.log(`Provider API listening on port ${port}...`));
};

init();
