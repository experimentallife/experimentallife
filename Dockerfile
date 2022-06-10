FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock ./
COPY ./src ./src
COPY ./public ./public

RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean
# RUN yarn build
# RUN yarn global add server

# ENV PATH="$PATH:$(yarn global bin)"

EXPOSE 3000

# CMD serve -s build;
CMD yarn start;