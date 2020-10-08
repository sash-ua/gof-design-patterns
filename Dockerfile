FROM node:12.16.1-alpine AS builder

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=builder /app/docs /usr/share/nginx/html
