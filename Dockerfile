FROM node:14-alpine

RUN mkdir -p /usr/src/back-end
WORKDIR /usr/src/back-end

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/back-end
RUN npm install

RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "run", "start:prod"]