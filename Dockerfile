FROM node:20-alpine3.20

WORKDIR /usr/app

COPY . .

EXPOSE 8080

CMD ["yarn","start"]
