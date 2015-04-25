(function() {
  'use strict';

  var pytools = require('./pytools');
  pytools.init(process.env.npm_package_config_python_version,
    process.env.npm_package_config_virtualenvs_path);
})();
