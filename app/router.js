'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // userAccess
  router.post('/api/user/access/login', controller.userAccess.login);
  router.get('/api/user/access/current', app.jwt, controller.userAccess.current);
  router.get('/api/user/access/logout', controller.userAccess.logout);
  router.post('/api/user/access/resetPsw', app.jwt, controller.userAccess.resetPsw);


  router.get('/api/user/:id', controller.user.show);


  // 上传服务
  router.post('/api/upload', controller.upload.create);
  router.post('/api/upload/url', controller.upload.url);
  router.post('/api/uploads', controller.upload.multiple);

};
