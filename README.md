pytools
===
Install Python 2.7.8 and Python virtual environments.

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

Dependent services can install `pytools` with:

    require('pytools').install();

Testing
---
### Functionality
    $ npm test

### Code conformity
    $ jshint lib test
    $ jscs .

Connects to
---
No connections
