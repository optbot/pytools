(function() {
  'use strict';

  module.exports = {
    install: install
  };

  function install() {
    var shell = require('shelljs');
    var pythonVersion = process.env.npm_package_config_python_version;
    var venvPath = process.env.npm_package_config_virtualenvs_path;

    shell.exec('./lib/install/python.sh ' + pythonVersion);
  }

  install();
})();
