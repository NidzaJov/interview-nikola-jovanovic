FROM node:16.13.0

WORKDIR /api

COPY package.json ./

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi


COPY . .

ENV PORT=4000

EXPOSE 4000

CMD ["node", "index.js"]