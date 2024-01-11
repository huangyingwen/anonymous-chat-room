# Naively Simple Node Dockerfile

FROM node:18-alpine

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .

USER node

#RUN yarn config set registry https://registry.npm.taobao.org
#RUN yarn install --prod --verbose
#RUN yarn build

EXPOSE 8080
CMD [ "yarn", "start" ]