(function() {
  'use strict';
  var shell = require('shelljs');
  var path = require('path');
  var nconf = require('nconf');

  exports.init = function() {
    var configFile = path.join(process.env.npm_config_quichean_nconf_path,
      'pytools', 'config.json');
    var pythonVersion;
    var venvPath;

    nconf.file({file: configFile});
    pythonVersion = nconf.get('python:version');
    venvPath = nconf.get('virtualenvs:path');
    // install Python 2.7 if not installed
    shell.exec(path.join(__dirname, 'python.sh') + ' ' + pythonVersion);
    // install pip
    shell.exec('apt-get install -y python-pip');
    // virtualenv
    shell.exec('pip install virtualenv');
    shell.exec('pip install virtualenvwrapper');
    // create virtualenv directory with correct permissions
    console.log('virtual environment directory: ' + venvPath);
    shell.mkdir('-p', venvPath);
    shell.exec('chown root:sudo ' + venvPath);
    shell.chmod(775, venvPath);
  };

  exports.configure = function(params) {
    var params = params || {};
    var targetDir = path.join(process.env.npm_config_quichean_nconf_path,
      'pytools');
    var configFile = 'config.json';
    var filesInPath = shell.ls(targetDir);
    var sourceFile = path.join(__dirname, configFile);
    var targetFile = path.join(targetDir, configFile);

    if (shell.test('-f', targetFile)) {
      console.log('configuration file already present');
      if (params['upgrade']) {
        console.log('upgrading file to newest version');
      } else {
        return;
      }
    }
    console.log('copying configuration file');
    shell.mkdir('-p', targetDir);
    shell.cp('-f', sourceFile, targetFile);
    shell.chmod(644, targetFile);
  };
})();
