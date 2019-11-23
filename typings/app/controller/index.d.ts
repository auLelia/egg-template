// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');
import ExportUserAccess = require('../../../app/controller/userAccess');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    upload: ExportUpload;
    user: ExportUser;
    userAccess: ExportUserAccess;
  }
}
