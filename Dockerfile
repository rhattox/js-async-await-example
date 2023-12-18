FROM node:20-alpine3.19

WORKDIR /opt

COPY ./src /opt

RUN npm install