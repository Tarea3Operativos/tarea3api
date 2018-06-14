import { port } from '../../package.json';

const all = {
  env  : process.env.NODE_ENV || 'development',
  port : process.env.PORT || parseInt(port, 10),
};

export default all;
