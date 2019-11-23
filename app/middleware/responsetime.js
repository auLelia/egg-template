/* eslint-disable strict */
/**
 * Add X-Response-Time header field.
 * @param {Dictionary} options options dictionary. { hrtime }
 *
 *        hrtime: boolean.
 *          `true` to use time in nanoseconds.
 *          `false` to use time in milliseconds.
 *          Default is `false` to keep back compatible.
 * @return {Function}
 * @api public
 */
module.exports = options => {
  const hrtime = options && options.hrtime;
  return function responseTime(ctx, next) {
    const start = ctx[Symbol.for('request-received.startAt')]
      ? ctx[Symbol.for('request-received.startAt')]
      : process.hrtime();
    return next().then(() => {
      let delta = process.hrtime(start);

      // Format to high resolution time with nano time
      delta = delta[0] * 1000 + delta[1] / 1000000;
      if (!hrtime) {
        // truncate to milliseconds.
        delta = Math.round(delta);
      }
      ctx.set('x-response-time', delta + 'ms');
    });
  };
};
