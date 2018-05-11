'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525313946265_8032';

  // add your config here
  config.middleware = [];

  // 自定义端口号
  config.cluster = {
    listen: {
      port: 14250,
      hostname: '127.0.0.1',
    },
  };

  // CSRF 配置
  config.security = {
    csrf: false,
    methodnoallow: {
      enable: false
    }, 
    domainWhiteList: ['http://localhost:12138', 'http://127.0.0.1:12138']
  };

  // 允许跨域请求
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true
  };

  // mysql
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '111111',
      // database
      database: 'abn',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  // 异常处理
  config.onerror = {
    all(err, ctx) {
      ctx.logger.error(err);
      if (err.name === 'ServiceError') {
        ctx.body = {
          code: 0,
          msg: '请求失败',
          reason: err.errors
        };
      } else {
        ctx.body = {
          code: -1,
          msg: '请求异常',
          reason: err.errors
        };
      }
      ctx.status = 200;
    }
  }

  return config;
};
