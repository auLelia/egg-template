// 404 错误处理
/* eslint-disable strict */
module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = { error: 'NOT FOUND' };
      } else {
        ctx.body = '<h1>Page not found</h1>';
      }
    }
  };
};
