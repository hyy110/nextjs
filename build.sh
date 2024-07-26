#!/bin/bash
. /etc/profile

set -e

nvm use lts/fermium

mkdir output
mkdir output_resource

cp -r build/* output
cp -r build/* output_resource