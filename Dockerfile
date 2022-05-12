FROM node:18-alpine

LABEL version="1.0" description="node image"

WORKDIR /src/app

COPY ./package.json ./

RUN npm install -g yarn
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["npm", "start:dev"]