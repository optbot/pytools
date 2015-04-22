#!/bin/bash
version="$1"
case "$(python --version 2>&1)" in
    *" $version"*)
        echo "Python $version is already installed:"
        python --version
        ;;
    *)
        echo "Installing Python $version"
        apt-get install "python$version"
        ;;
esac
