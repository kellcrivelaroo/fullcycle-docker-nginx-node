# Desafio Docker - Nginx, Node.js e MySQL

Este repositório contém a solução para o desafio de configurar nginx como proxy reverso para uma aplicação Node.js que interage com um banco de dados MySQL.

## Como usar

Certifique-se de ter Docker e Docker Compose instalados em sua máquina.

1. Clone este repositório:
   ```bash
   git clone https://github.com/kellcrivelaroo/fullcycle-docker-nginx-node.git
   cd fullcycle-docker-nginx-node

2. Execute o Docker Compose para subir os serviços:
```bash
  docker-compose up -d
```
Isso iniciará os serviços e os deixará disponíveis na porta 8080.

## Detalhes da Configuração
- nginx: Configurado como proxy reverso para encaminhar requisições para a aplicação Node.js.
- nodejs: Aplicação Node.js que recebe requisições do nginx, adiciona registros na tabela `Users` no MySQL e retorna uma mensagem HTML.
- mysql: Banco de dados MySQL para armazenar registros na tabela `Users`.
