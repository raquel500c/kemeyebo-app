const path = require('path');
const debug = require('debug')("kemeyebo:"+path.basename(__filename).split('.')[0]);
const mongoose = require('mongoose');
const dbURL = process.env.DB_URL;
// local--> const dbURL = process.env.DB_URL || 'mongodb://localhost/kemeyebo-app2';

mongoose.Promise = global.Promise
mongoose.connect(dbURL)
  .then(() => debug(`connected to database ${dbURL}`))
  .catch(e => {
    debug(`ERROR CONNECTING TO DB ${dbURL}`);
    throw e;
  });
