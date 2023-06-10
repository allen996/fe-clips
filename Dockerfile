FROM nginx
WORKDIR /usr/src/app
COPY ./dist/ /usr/share/nginx/html/