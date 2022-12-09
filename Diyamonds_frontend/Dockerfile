### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /usr/local/app
COPY package.json ./
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

### STAGE 2: Run ###
FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/local/app/dist/diyamonds-frontend /usr/share/nginx/html
EXPOSE 80
