'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async register(params) {
    const { ctx, app } = this;
    const result = await app.mysql.insert('user', params);
    return result;
  }
}

module.exports = UserService;