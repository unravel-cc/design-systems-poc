# Stage 1: Build the Angular application
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY ./ /app/
RUN npm run build

# Stage 2: Setup Nginx to serve the Angular application
FROM nginx:alpine

COPY --from=build-stage /app/dist/u-hr/browser /usr/share/nginx/html
COPY --from=build-stage /app/dist/u-hr/browser/index.html /usr/share/nginx/html/404.html

RUN chmod -R 755 /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

