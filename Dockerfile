
FROM node:10 as node
MAINTAINER Antonio Cast

WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build -- --prod --environment $env

FROM nginx:1.13
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY .custom.conf /etc/nginx/conf.d/default.conf
