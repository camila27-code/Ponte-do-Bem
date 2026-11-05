# Ponte do Bem

Sistema acadêmico para organização de doações e aproximação entre doadores e
beneficiários em situação de vulnerabilidade.

O projeto possui:

- **API:** Java 21, Spring Boot, Spring Data JPA, Spring Security e MySQL.
- **Frontend:** React, TypeScript, Vite e Tailwind CSS.
- **Ambiente completo:** Docker Compose com frontend, API e banco de dados.

## Pré-requisitos

Para executar o projeto completo, instale:

- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-docker/)
- Docker Compose v2, incluído no Docker Desktop e nas versões atuais do Docker Engine.

Para executar os projetos fora do Docker, também serão necessários:

- Node.js 22 ou superior e npm
- JDK 21
- MySQL 8.4

## Primeiro acesso

Clone o repositório e entre na pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd Ponte-do-Bem
```

Crie o arquivo `.env` a partir do exemplo:

```bash
cp .env_example .env
```

Abra o `.env` e informe os valores do banco:

```env
MYSQL_ROOT_PASSWORD=uma-senha-segura
MYSQL_DATABASE=ponte_do_bem
MYSQL_USER=ponte_user
MYSQL_PASSWORD=uma-senha-segura
```

O arquivo `.env` não deve ser commitado, pois pode conter credenciais.

## Iniciar tudo com Docker Compose

Esta é a forma recomendada para quem acabou de baixar o projeto. Na raiz do
repositório, execute:

```bash
docker compose up --build
```

Na primeira execução, o Docker fará o download das imagens, instalará as
dependências do frontend e compilará a aplicação. Depois, acesse:

- **Frontend:** http://localhost:5173
- **API:** http://localhost:8080
- **Health check:** http://localhost:8080/api/health
- **Swagger UI:** http://localhost:8080/swagger-ui/index.html

Para iniciar os containers em segundo plano:

```bash
docker compose up --build -d
```

Para acompanhar os logs:

```bash
docker compose logs -f
```

Para acompanhar apenas a API:

```bash
docker compose logs -f backend
```

Para parar os serviços:

```bash
docker compose down
```

Os dados do MySQL ficam no volume `mysql_data` e são preservados ao executar
`docker compose down`. Para apagar também o banco e começar do zero:

```bash
docker compose down -v
```

> O comando acima remove permanentemente os dados armazenados nos volumes do
> projeto.

## Executar o frontend localmente

O frontend atualmente utiliza dados de demonstração em memória e ainda não
está conectado aos endpoints da API. Para executar com o servidor de
desenvolvimento do Vite:

```bash
cd frontend
npm install
npm run dev
```

Acesse http://localhost:5173.

Para gerar e testar o build de produção:

```bash
npm run build
npm run preview
```

## Executar a API localmente

O modo mais simples de disponibilizar o banco é iniciar apenas o serviço
MySQL pelo Compose:

```bash
docker compose up -d database
```

Em outro terminal, execute a API:

```bash
set -a
source .env
set +a
cd backend
./mvnw spring-boot:run
```

No Windows, use:

```powershell
Get-Content .env | ForEach-Object {
  if ($_ -match '^([^#=]+)=(.*)$') {
    [Environment]::SetEnvironmentVariable($matches[1], $matches[2], 'Process')
  }
}
cd backend
.\mvnw.cmd spring-boot:run
```

A API ficará disponível em http://localhost:8080. O arquivo `.env` da raiz
precisa estar configurado antes de iniciar o banco; as variáveis também devem
ser exportadas no terminal que inicia a API.

Para executar os testes da API:

```bash
cd backend
./mvnw test
```

## Estrutura do projeto

```text
.
├── backend/              # API Spring Boot
├── frontend/             # Aplicação React
├── banco_do_projeto.sql  # Script SQL do projeto
├── docker-compose.yaml   # Frontend, API e MySQL
└── .env_example          # Modelo das variáveis de ambiente
```

## Funcionalidades do frontend

- Dashboard com resumo das doações.
- Cadastro de doações em formulário.
- Busca e filtro por categoria.
- Listagem de doadores e beneficiários.
- Interface responsiva para desktop e dispositivos móveis.

Os dados do painel são demonstrativos nesta versão. A persistência e a
integração completa entre o frontend e a API serão implementadas em uma etapa
posterior.

## Equipe

- Suyane Silva de Oliveira
- Camila Lima Jesus
- Lucas Vinicius Ribeiro
- Pedro Henrique Ferreira

## Licença

Projeto acadêmico para estudo e desenvolvimento da comunidade.
