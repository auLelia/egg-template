'use strict';

// had enabled by egg
// exports.static = true;

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
}

exports.bcrypt = {
  enable: true,
  package: 'egg-bcrypt',
}
