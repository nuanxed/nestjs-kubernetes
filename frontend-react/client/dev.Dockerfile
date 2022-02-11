FROM node:12-alpine

WORKDIR /app
EXPOSE 8080

COPY package* ./
RUN apk update && apk add --no-cache --virtual .build-deps make gcc g++ python3 \
 && npm ci \
 && apk del .build-deps
COPY . .

ENV PORT=8080
ENV NODE_ENV=development
CMD ["npm", "run", "start"]
