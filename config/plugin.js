'use strict';

// had enabled by egg
// exports.static = true;
exports.view = {
  enable: true,
  package: 'egg-view',
};
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
exports.static = {
  // maxAge: 31536000,
};
