import express from 'express';
import chalk from 'chalk';
import config from './config/environment';
import mongoose from 'mongoose';
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://programathon2017:test123456789@ds147884.mlab.com:47884/programathon2017', (err) => {
  if (err) throw console.log(chalk.red(`MONGO: ${err.message}`));
});

require('./config/express').default(app);
require('./config/routes').default(app);

app.listen(config.port, () => {
  console.log(chalk.white(`\nAPI server listening on port ${chalk.bold(config.port)} in ${chalk.bold(app.get('env'))} mode.\n`));
});

export default app;
