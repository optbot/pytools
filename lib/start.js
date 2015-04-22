(function() {
  'use strict';

  var shell = require('shelljs'),
    pythonVersion = process.env.npm_package_config_python_version,
    venvPath = process.env.npm_package_config_virtualenvs_path;

  shell.exec('./lib/install/python.sh ' + pythonVersion);
})();
