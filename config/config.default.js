/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573033992542_2792';

  // add your middleware config here
  config.middleware = [ 'responsetime', 'notfoundHandler' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    database: 'huangji',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'aa123456',
  };

  config.bcrypt = {
    saltRounds: 10,
  };

  config.jwt = {
    secret: '123456',
  };

  return {
    ...config,
    ...userConfig,
  };
};
