'use strict';

const { Controller } = require('egg');

class BaseController extends Controller {
  // 交易成功
  success(data) {
    const { ctx } = this;
    ctx.body = {
      code: 1,
      msg: '请求成功',
      result: data
    };
  }

  // 交易失败
  error(reason) {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: '请求失败',
      reason
    };
  }
}

module.exports = BaseController;