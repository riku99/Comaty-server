#!/bin/bash
if [ "$NODE_ENV" = "production" ]
then
yarn prisma generate
yarn generate
yarn ts-node --transpile-only -r tsconfig-paths/register ./src/index.ts
elif [ "$NODE_ENV" = 'dev' ]
then
yarn generate
yarn prisma migrate dev
yarn dev:start
fi