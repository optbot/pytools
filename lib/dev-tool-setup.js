(function() {
  'use strict';

  var shell = require('shelljs');
  var path = require('path');
  var venvPath = process.env.npm_package_config_virtualenvs_path;

  shell.exec(path.join(__dirname, 'dev-config.sh') + '  ' + venvPath);
})();
