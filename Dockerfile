FROM node:18-alpine

USER 0

RUN npm i -g pm2

ENV HOME /home/node/app

WORKDIR $HOME

COPY . . 

RUN npm i -g @nestjs/cli && npm install 
RUN npm run build

ENV PORT 8080
EXPOSE $PORT

RUN chown -R 1001:0 "/home/node/app/"
RUN chmod -R ug+rw "/home/node/app"

USER 1001

CMD ["pm2-runtime", "npm start"]