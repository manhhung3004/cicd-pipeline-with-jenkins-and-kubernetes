<<<<<<< HEAD
FROM node:20.11.0-alpine
=======
##### Dockerfile #####
FROM node:10-alpine
>>>>>>> fb5d24b083c754c93b607ffac6d5809329a91c55

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .

EXPOSE 8080
<<<<<<< HEAD
CMD [ "node", "server.js" ]
=======
CMD [ "node", "app.js" ]
>>>>>>> fb5d24b083c754c93b607ffac6d5809329a91c55
