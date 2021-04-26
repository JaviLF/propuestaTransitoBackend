## generar migraciones

- npx sequelize migration:create --name=<name-of-the-migration>

## hacer correr las migraciones

- npx sequelize-cli db:migrate

## generar modelos

- npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

## generar seed

- npx sequelize-cli seed:generate --name demo-user

## ejecutar seeds

- npx sequelize-cli db:seed:all
