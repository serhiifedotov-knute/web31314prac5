FROM node:20-alpine3.20

WORKDIR /usr/app

COPY . .

RUN npm install && npm run build

EXPOSE 8080

CMD ["yarn","start:dev"]
