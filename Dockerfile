# Estágio 1: Dependências e Build
FROM node:20-slim AS builder
WORKDIR /app

# Metadados para o GitHub Container Registry (GHCR)
LABEL org.opencontainers.image.source=https://github.com/davidsoncabista/Portifolio
LABEL org.opencontainers.image.description="Portfólio v1.0.0 - Edição Pessoal Estável"
LABEL org.opencontainers.image.licenses=MIT

# Instalação de dependências nativas para o npm install (python, make, g++)
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

# Copia o código e gera o build do Next.js
COPY . .
RUN npm run build

# Estágio 2: Runner (Imagem final leve para o LXC)
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copiamos apenas o que é estritamente necessário para rodar o app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]