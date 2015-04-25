pytools
===
Install Python 2.7 and Python virtual environments.

Usage
---
### Basic
1.  Install (npm setup):
    
        $ npm install

2.  Configure the installation path for Python virtual environments
    if you want to install them to a directory other than the default:

        $ sudo npm config set @optbot/pytools:virtualenvs:path "/<path>" --global

3.  Update [Apt](https://wiki.debian.org/Apt):

        $ sudo apt-get update

4.  Run (perform the installation):

        $ sudo npm start
       
### Details

#### Dependent services
Dependent services can install `pytools` with:

    var pytools = require('@optbot/pytools');
    pytools.init();

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
