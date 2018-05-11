'use strict';

const Service = require('egg').Service;
const ServiceError = require('../error')

class UserService extends Service {
  // 用户注册
  async register(params) {
    const { ctx, app } = this;
    const result1 = await app.mysql.select('user', {
      where: { username: params.username }
    });
    if (result1[0]) {
      throw new ServiceError('用户名已存在')
    }
    const result2 = await app.mysql.insert('user', params);
    if (result2.affectedRows === 1) {
      return '注册成功'
    } else {
      throw new ServiceError('注册失败')
    }
  }
  // 用户登录
  async login(params) {
    const { ctx, app } = this;
    const result = await app.mysql.select('user', {
      where: { username: params.username }
    });
    console.log('result:', result)
    if (!result[0]) {
      throw new ServiceError('该用户名不存在')
    } else {
      if (params.password === result[0].password) {
        return result[0]
      } else {
        throw new ServiceError('密码错误')
      }
    }
  }
}

module.exports = UserService;