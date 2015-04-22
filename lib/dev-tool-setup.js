(function() {
  'use strict';

  var shell = require('shelljs');
  var venvPath = process.env.npm_package_config_virtualenvs_path;

  shell.exec(__dirname + '/dev-config.sh ' + venvPath);
})();
