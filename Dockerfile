FROM nginx
WORKDIR /usr/src/app
RUN apk add --update nodejs npm
COPY package*.json ./
RUN npm install --only=production && npm run build
COPY ./dist/ /usr/share/nginx/html/