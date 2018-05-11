'use strict';

const Controller = require('./base')

class UserController extends Controller {
  async register() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate({
      username: { type: 'string' },
      password: { type: 'string' }
    }, ctx.request.body);
    // 组装参数
    const params = Object.assign(ctx.request.body, {
      register_date: new Date()
    });
    const data = await service.user.register(params);
    this.success(data);
  }
}

module.exports = UserController;
