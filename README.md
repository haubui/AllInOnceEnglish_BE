# AllInOnceEnglish_BE
This NodeJs server provide all API that mobile need to show to user functionalities about English App, Including studying about grammar, exercises, tests, ielts, toefl, pronunciation and common practices.


## Framework
- Nest
- Express Node
- Typescript
- Mongoose
- Mongodb
- Redis
- JsonWebToken
- Jest
- Docker
- Multer

## Highlights
- API key support
- Token based Authentication
- Role based Authorization
- Database dump auto setup
- vscode template support
- Unit Tests
- Integration Tests
- 75% plus Test Coverage
- Clean and modular codebase

## Notes
A few things are added to aid the learning process
- disk submodule is added to provide images
- database dump is added to seed the database

## API Framework Design
![Request-Response-Design](.resources/documentations/assets/api-structure.png)

## Request-Response Flow
`
src → main.ts → app-module.ts → core.module.ts → apikey.guard.ts → auth.module.ts → auth.guard.ts → role.guard.ts → [feature].module.ts → [feature].controller.ts → [feature].service.ts → response.validation.ts → exception.handler.ts → response.transformer.ts
`

# Installation Instruction
vscode is the recommended editor - dark theme

### Get the repo
```bash
# clone repository recursively
git clone https://github.com/haubui/AllInOnceEnglish_BE.git --recursive
```

### Install libraries
```bash
$ npm install
```

### Run Docker Compose
- Install Docker and Docker Compose. [Find Instructions Here](https://docs.docker.com/install/).

```bash
# install and start docker containers
docker-compose up -d
```
-  You will be able to access the api from http://localhost:3000

### Run Tests
```bash
docker exec -t tester npm run test:cov
```
If having any issue
- Make sure 3000 port is not occupied else change PORT in **.env** file.
- Make sure 20247 port is not occupied else change DB_PORT in **.env** file.
- Make sure 6379 port is not occupied else change REDIS_PORT in **.env** file.

## Run on the local machine
Change the following hosts in the **.env** and **.env.test**
- DB_HOST=localhost
- REDIS_HOST=localhost

Best way to run this project is to use the vscode `Run and Debug` button. Scripts are available for debugging and template generation on vscode.

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

```bash
#example template for adding new feature with current architecture
$npx ts-node .templates/feature.generator.ts your_new_feature
```

## Contribution
Please feel free to fork it and open a PR.

