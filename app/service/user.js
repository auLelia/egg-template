const Service = require('egg').Service;

class UserService extends Service {
  // create======================================================================================================>
  async create(payload) {
    const { ctx, service } = this;
    const role = await service.role.show(payload.role);
    if (!role) {
      ctx.throw(404, 'role is not found');
    }
    payload.password = await this.ctx.genHash(payload.password);
    return ctx.model.User.create(payload);
  }

  // destroy======================================================================================================>
  async destroy(_id) {
    const { ctx, service } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, 'user not found');
    }
    return ctx.model.User.findByIdAndRemove(_id);
  }

  // update======================================================================================================>
  async update(_id, payload) {
    const { ctx, service } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, 'user not found');
    }
    return ctx.model.User.findByIdAndUpdate(_id, payload);
  }


  // show======================================================================================================>
  async show(id) {
    const user = await this.ctx.service.user.find(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return this.ctx.model.User.findById(id);
  }


  async removes(payload) {
    return this.ctx.model.User.remove({ _id: { $in: payload } });
  }


  // Commons======================================================================================================>
  async findByMobile(mobile) {
    return this.ctx.model.User.findOne({ where: { 'mobile': mobile } });
  }


  async find(id) {
    return this.ctx.model.User.findByPk(id, {
      attributes: {
         exclude: ['password']
      }
    });
  }


  async findByIdAndUpdate(id, values) {
    return this.ctx.model.User.update(values, { where: { id: id } });

  }


}


module.exports = UserService;
