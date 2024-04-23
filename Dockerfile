FROM node:20-alpine

WORKDIR /

COPY package*.json ./

RUN apk add --no-cache git && \
    npm install 

COPY . .

EXPOSE 3000

CMD [ "npm","run", "dev" ]