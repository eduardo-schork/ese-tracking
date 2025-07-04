FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
COPY tsconfig.json ./

RUN yarn install

COPY . .

RUN yarn build

# ---------------------------

FROM node:18-alpine

WORKDIR /app

# Copia os arquivos da build
COPY --from=builder /app/dist ./dist

# Copia o spec YAML
COPY --from=builder /app/docs ./docs

COPY package.json yarn.lock ./
COPY wait-for-it.sh ./
RUN chmod +x ./wait-for-it.sh

RUN yarn install --production

ENV NODE_ENV=production
EXPOSE 3001
CMD ["node", "dist/main.js"]
