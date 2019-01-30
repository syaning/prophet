# build stage
FROM node:10-slim as build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

# deploy stage
FROM nginx:1.14
COPY --from=build-stage /usr/src/app/dist/ /usr/share/nginx/html/
EXPOSE 80
