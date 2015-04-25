(function() {
  'use strict';

  var configPath = process.env.npm_config_quichean_nconf_path;
  var nconf = require('nconf');
  var path = require('path');
  var configFile = path.join(process.env.npm_config_quichean_nconf_path, 'pytools', 'config.json');
  console.log(configFile);
  nconf.file({file: configFile});
  console.log('python version: ' + nconf.get('python:version'));
  console.log('venv path: ' + nconf.get('virtualenvs:path'));
  /*
  var pytools = require('./pytools');
  pytools.init(process.env.npm_package_config_python_version,
    process.env.npm_package_config_virtualenvs_path);
  */
})();
