pytools
===
Install Python 2.7 and Python virtual environments.

Usage
---
### Basic
1.  Install (npm setup):
    
        $ npm install

3.  Update [Apt](https://wiki.debian.org/Apt):

        $ sudo apt-get update

4.  Run (perform the installation):

        $ sudo npm start
       
### Details

#### Dependent services
Dependent services can install `pytools` and set up Python configurations with:

    var pytools = require('@optbot/pytools');
    // installs correct Python version and sets up virtual environments
    pytools.init();
    // copies configuration file with optbot Python configurations
    pytools.configure();

Called with no arguments, `init()` and `configure()` will do nothing if
configurations already exist on the server. To update (and potentially change)
the prior configuration, you can pass to `configure()` an object where `upgrade`
is set to `true`:

    pytools.configure({upgrade: true});

#### Python developer tools

Run the following command as yourself. Do not run as `sudo`, and do
not run in production environments (!!!!):

    $ npm run dev-tool-setup
    $ source ~/.bashrc

This configures [virtualenvwrapper](http://docs.python-guide.org/en/latest/dev/virtualenvs/) and
associated convenience tools for developer use.

Testing
---
### Functionality
Currently no tests

### Code conformity
    $ jshint lib
    $ jscs .

Connects to
---
No connections
