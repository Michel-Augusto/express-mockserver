# express-mockserver

# configuração do projeto
npm install

# build do docker
docker build -t express-mockserver .

# executar o docker na porta 1080
docker run --name express-mockserver -p 1080:1080 express-mockserver

# testar se o docker está funcional
npm test server.test.js

# finalizar a execução do docker
docker stop express-mockserver
