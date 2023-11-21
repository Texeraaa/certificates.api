# Use uma imagem base do Node.js
FROM node:16.20

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código para o contêiner
COPY . .

# Exponha a porta do aplicativo
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
