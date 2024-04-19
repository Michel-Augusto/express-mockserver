FROM node:latest

RUN apt-get update && \
    apt-get install -y default-jre && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY server.js ./

EXPOSE 1080

CMD ["node", "server.js", "--name", "mockserver-express"]
