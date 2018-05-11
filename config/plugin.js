'use strict';

// had enabled by egg
// exports.static = true;

// 跨域
exports.cors = {
  enable: true,
  package: 'egg-cors'
};

// mysql 插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
};

// 参数校验
exports.validate = {
  enable: true,
  package: 'egg-validate'
};