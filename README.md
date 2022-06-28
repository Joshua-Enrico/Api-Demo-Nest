
# Api Demo

Si bien han mencionado un stack de tecnologias que manejo, esta esta api estoy usando algunas tecnologias diferentes, ya que hoy en dia las bigTech las usan para proyectos nuevos, con la finalidad de estar a la vanguardia de lo nuevo que sale y sacarle el mayor provecho de las librerias que se tiene al alcance
En esta ocasion fui por una arquitectura Serverless, eso quiere decir que no estaremos usando un servidor  y tenemos tanto la Api y Base de datos en hostings diferentes

## A mencionar
Se esta obviando la implementacion de una autenticacion, por temas de poca especificaion en los requerimientos del Test.
En un princpio iba a Hostear la api en lambda de Aws con CI/CD, pero al final decidi por los servicios Cloud que estare detallando mas abajo.



## Tecnologias usadas

- TypeScript: Por sus caracteristicas, hoy en dia se usa TypeScript para cualquier proyecto nuevo
- Nest.js: Si bien Express es el marco de trabjo mas usado, Nest.js practicamente lo destrono y es mucho mas viable para cualquier proyecto nuevo, Nest.js usa express o FastAPI
- MySql: la base de dato relacional mas extendida
- Swagger: modulo que facilita la documentacion
- Prisma: Es la ORM del futuro ya que ofrece muchas nuevas caracteristicas y le saca mayor provecho a la arquitrectura serverless
- PlanetScale: Se esta usando este DBaaS para tener una base de datos y asi evitar levantar un servidor completo
- Vercel: Para alojar nuestra Api as a serverless
- GitHub: Estamos usando este cloud para repositorios y a su vez estamos implementando CI/CD


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`: endpoint a base de datos

`SHADOW_DATABASE_URL`: end point a una rama especifica de nuestars base de datos, esto con la finalidad de manerar las migraciones de manera mas optima

`PORT`: puerto para la aplicacion


## Instalacion

Para instalar en desarrollo es de la siguiente manera
version de node js v14.19.1

```bash
  yarn install
  yarn start:dev
```

Para produccion

```bash
  yarn install
  yarn build
  yarn start:prod
```
## Documentacion
Ya que estamos usando swagger, no documentare los endpoints aqui

[Link de Swagger Docs](https://api-demo-nest.vercel.app/docs/)

