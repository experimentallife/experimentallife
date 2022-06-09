FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock ./
COPY ./src ./src

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean
RUN yarn build
RUN yarn global add server

CMD serve -s build;