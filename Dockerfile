FROM node:20-alpine
COPY . /web
WORKDIR /web

RUN yarn config set registry https://registry.nodejitsu.com/
RUN yarn install
RUN yarn build


FROM halverneus/static-file-server:v1.8.9
COPY --from=0 /web/dist /web
EXPOSE 8080
