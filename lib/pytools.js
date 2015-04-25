(function() {
  'use strict';

  exports.pythonVersion = process.env.npm_package_config_python_version;
  exports.venvPath = process.env.npm_package_config_virtualenvs_path;

  exports.init = function(pythonVersion, venvPath) {
    var shell = require('shelljs');
    var path = require('path');

    // install Python 2.7 if not installed
    shell.exec(path.join(__dirname, 'python.sh') + ' ' + pythonVersion);
    // install pip
    shell.exec('apt-get install -y python-pip');
    // virtualenv
    shell.exec('pip install virtualenv');
    shell.exec('pip install virtualenvwrapper');
    // create virtualenv directory with correct permissions
    shell.mkdir('-p', venvPath);
    shell.exec('chown root:sudo ' + venvPath);
    shell.chmod(775, venvPath);
  };
})();
