FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY dist/ ./dist/


RUN npm ci --only=production --no-audit

EXPOSE 3000

CMD ["npm", "start"]
