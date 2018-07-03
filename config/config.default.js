'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};
  config.view = {
    defaultViewEngine: 'ejs',
    defaultExtension: '.ejs',
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
    mapping: {
      '.ejs': 'ejs',
    },
  };
  config.static = {
    prefix: '',
    dir: path.join(appInfo.baseDir, 'app/public'),
    dynamic: true,
    preload: false,
    maxAge: 31536000,
    buffer: false,
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530494603638_360';

  // add your config here
  config.middleware = [];

  return config;
};
