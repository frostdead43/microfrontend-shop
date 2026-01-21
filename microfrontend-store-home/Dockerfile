FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./


RUN npm ci --only=production --no-audit

EXPOSE 3000

CMD ["npm", "start"]
