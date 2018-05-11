'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 用户
  // 注册
  router.post('/user/register', controller.user.register);
  // 登录
  router.post('/user/login', controller.user.login);
  
};
