FROM alpine:3.17

WORKDIR /usr/src/app

# Install Node.js and npm
RUN apk add --update nodejs yarn

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]