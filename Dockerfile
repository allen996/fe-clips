FROM nginx
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production && npm run build
COPY ./dist/ /usr/share/nginx/html/