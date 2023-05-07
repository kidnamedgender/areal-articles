# areal-articles

## Устанавливаем репозиторий

```sh
git clone https://github.com/kidnamedgender/areal-articles.git
```

```
cd areal-articles
```

```
code .
```

## Устанавливаем зависимости клиента

```sh
cd client
```

```
npm i
```

```
cd ..
```

## Устанавливаем зависимости сервера

```sh
cd server
```

```
npm i
```

## Заполняем переменные окружения актуальными данными (PORT = 5555)

/server/.env

## Заполняем конфигурацию миграции актуальными данными

/server/migration/config/config.json

## Мигрируем таблицы и сиды

```sh
cd migration
```

```
npx sequelize-cli db:migrate
```

```
npx sequelize-cli db:seed:all
```

## Запускаем...

```sh
cd ..
```

```
npm run dev
```
