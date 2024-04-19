# express-mockserver

# configuração do projeto
npm install

# build do docker
docker build -t mockserver-express .

# executar o docker na porta 1080
docker run --name mockserver-express -p 1080:1080 mockserver-express

# testar se o docker está funcional
npm test server.test.js

# finalizar a execução do docker
docker stop mockserver-express