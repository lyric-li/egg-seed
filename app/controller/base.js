'use strict';

const { Controller } = require('egg');

class BaseController extends Controller {
  // 请求成功
  success(data) {
    const { ctx } = this;
    ctx.body = {
      code: 1,
      msg: '请求成功',
      result: data
    };
  }
}

module.exports = BaseController;