// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNotfoundHandler = require('../../../app/middleware/notfound_handler');
import ExportResponsetime = require('../../../app/middleware/responsetime');

declare module 'egg' {
  interface IMiddleware {
    notfoundHandler: typeof ExportNotfoundHandler;
    responsetime: typeof ExportResponsetime;
  }
}
