FROM nginx:alpine
WORKDIR /app
COPY ./dist /usr/share/nginx/html
