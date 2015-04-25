pytools
===
Install Python 2.7 and Python virtual environments.

Usage
---
### Basic
1.  Install (npm setup):
    
        $ npm install

2.  Configure.
    1.  Go to the directory specified in your global `npm config` by
        `quichean:nconf:path` and make a subdirectory `pytools:

            $ pushd <quichean-conf-path>
            $ mkdir pytools

    1.  Copy the file `config.json` from the current directory to
        `<quichean-conf-path>/pytools`: 

            $ popd
            $ cp config.json <quichean-conf-path>/pytools/

    1.  Edit the file (do not delete keys!) and change permissions:

            $ vim <quichean-conf-path>/pytools/config.json
            $ sudo chown -R root:sudo <quichean-conf-path>/pytools
            $ sudo chmod -R 774 <quichean-conf-path>/pytools

3.  Update [Apt](https://wiki.debian.org/Apt):

        $ sudo apt-get update

4.  Run (perform the installation):

        $ sudo npm start
       
### Details

#### Dependent services
Dependent services can install `pytools` with:

    var pytools = require('pytools');
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
