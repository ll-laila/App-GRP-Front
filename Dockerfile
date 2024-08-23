# build the anguular app
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
#Assurez-vous que les permissions sont correctes
RUN chmod +x ./node_modules/.bin/ng

# Nettoyez le cache npm avant de builder
RUN npm cache clean --force

# Construisez l'application Angular
RUN npm run build -- --configuration production

# serve the angular app with nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *

#copy the built angular app from the build stage
COPY --from=build /app/dist/app-gestion-stock/browser .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]