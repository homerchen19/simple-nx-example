FROM node:16-alpine
RUN apk add python3 make g++
WORKDIR /app
COPY package.json ./package.json
RUN yarn install

COPY .next ./.next
COPY next.config.js ./next.config.js

EXPOSE 3000

CMD yarn start -p 3000
