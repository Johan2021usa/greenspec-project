import {EnvironmentPlugin} from 'webpack';
import {config} from 'dotenv';

config();
module.exports = {
  plugins: [
    new EnvironmentPlugin([
      'SERVICE_KEY',
      'TEMPLATE_KEY',
      'PUBLIC_KEY'
    ])
  ]
}
