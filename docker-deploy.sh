#!/bin/bash
APP_VERSION="0.0.1"
DOCKER_API="seng-nest-api"

nx build accounts-api

cp package.json docker/accounts-api/

tar -cJf docker/accounts-api/build.tar.xz -C dist/apps/accounts-api .

cd docker/accounts-api

docker build -f Dockerfile -t $DOCKER_API:$APP_VERSION .