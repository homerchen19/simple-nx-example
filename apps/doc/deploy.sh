#!/bin/bash

cd dist/apps/doc
cp ../../../apps/doc/Dockerfile .
docker build -t nextjs-docker .
docker run -p 3000:3000 --env MY_SECRET=secretFromDockerRun nextjs-docker
