'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async show() {
    const { ctx, service } = this;
    // 校验参数
    const { id } = ctx.params;

    const res = await service.user.find(id);

    ctx.helper.success({ctx, res});

  }

}

module.exports = UserController;
