#!/bin/sh

DIR=`dirname $0`
cp -v $DIR/gitconf/hooks/pre-commit $DIR/.git/hooks/pre-commit
chmod u+x $DIR/.git/hooks/pre-commit

mkdir -p $DIR/logs

npm install