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
COPY package.json yarn.lock ./

# Copia o script wait-for-it.sh
COPY wait-for-it.sh ./wait-for-it.sh

# Dá permissão de execução no script
RUN chmod +x ./wait-for-it.sh

# Instala apenas dependências de produção
RUN yarn install 

ENV NODE_ENV=production

EXPOSE 3001

CMD ["node", "dist/main.js"]
