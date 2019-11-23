// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportActionToken = require('../../../app/service/actionToken');
import ExportUser = require('../../../app/service/user');
import ExportUserAccess = require('../../../app/service/userAccess');

declare module 'egg' {
  interface IService {
    actionToken: ExportActionToken;
    user: ExportUser;
    userAccess: ExportUserAccess;
  }
}
