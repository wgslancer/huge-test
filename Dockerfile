FROM node:16.14.2 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN yarn
COPY ./ /app/

FROM nginx:latest
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf