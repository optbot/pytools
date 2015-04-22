#!/bin/bash
path="$1"
if grep -q "export WORKON_HOME=" ~/.bashrc
then
    echo "WORKON_HOME already configured for current user"
else
    echo "configuring WORKON_HOME"
    echo "# Python virtual environment configurations" >> ~/.bashrc
    echo "export WORKON_HOME=$path" >> ~/.bashrc
fi

if grep -q "virtualenvwrapper.sh" ~/.bashrc
then
    echo "virtualenvwrapper already configured for current user"
else
    echo "configuring virtualenvwrapper"
    echo "source /usr/local/bin/virtualenvwrapper.sh" >> ~/.bashrc
fi

if grep -q "[.]autoenv/activate.sh" ~/.bashrc
then
    echo "autoenv already configured for current user"
else
    echo "configuring autoenv"
    git clone git://github.com/kennethreitz/autoenv.git ~/.autoenv
    echo 'source ~/.autoenv/activate.sh' >> ~/.bashrc
fi
