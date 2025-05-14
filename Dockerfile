FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
COPY tsconfig.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package.json yarn.lock ./

RUN yarn install --production

ENV NODE_ENV=production

EXPOSE 3001

CMD ["node", "dist/main.js"]

