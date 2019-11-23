/* eslint-disable */
exports.success = ({ctx, res = null, msg = 'ok'}) => {
  ctx.body = {
    code: 0,
    data: res,
    msg,
  }
  ctx.status = 200;
}
