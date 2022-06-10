#!/bin/bash

hostname=server
docker run -d -p 3000:8080 --name experimentallife-"$hostname" experimentallife/experimentallife:"$hostname"