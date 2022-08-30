# Adapted from
# https://dev.to/bahachammakhi/dockerizing-a-react-app-with-nginx-using-multi-stage-builds-1nfm

# build environment
FROM node:16.4.1-alpine AS build

WORKDIR /app
COPY . .

RUN rm -R /app/node_modules
RUN npm i
RUN npm run build

# production environment
FROM nginx:stable-alpine AS prod

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

ENV NODE_ENV=production

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# testing
FROM build AS test

CMD ["npm", "run", "test"]