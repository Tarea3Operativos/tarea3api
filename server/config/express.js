import compression from 'compression';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import customResponses from './responses';
import multiparty from 'connect-multiparty';
import { env } from './environment';
import pmx from 'pmx';

pmx.init({
  http          : true, // HTTP routes logging
  errors        : true, // Exceptions loggin (default: true)
  custom_probes : true, // Auto expose JS Loop Latency and HTTP req/s as custom metrics
  network       : true, // Network monitoring at the application level
  ports         : true, // Shows which ports your app is listening on
});

export default (app) => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('X-powered-by', 'Helix Nebula');
    next();
  });
  app.use(multiparty());
  app.use(cors());
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended : true }));
  app.use(customResponses());
  app.use(pmx.expressErrorHandler());

  if (env === 'development') {
    app.use(logger('dev'));
  }
};
