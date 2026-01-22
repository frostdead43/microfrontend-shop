FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV HOME_APP_URL=http://home:3000
ENV CART_APP_URL=http://cart:3000

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
