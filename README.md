# school-scheduler
## Descripción

Este proyecto es una aplicación backend construida con NestJS, TypeORM y MySQL para gestionar el agendamiento de clases en un colegio. La aplicación permite la creación y gestión de profesores, estudiantes y clases. Cada clase puede tener un único profesor y múltiples estudiantes asignados.

## Estructura del Proyecto

El proyecto está organizado en los siguientes módulos:

- **Teachers**: Gestiona los profesores.
- **Students**: Gestiona los estudiantes.
- **Classes**: Gestiona las clases.
  
## Tecnologías Utilizadas

- NestJS ![NestJS](https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
- TypeScript ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
- TypeORM ![TypeORM](https://img.shields.io/badge/-TypeORM-F37626?style=flat-square&logoColor=white)
- MySQL ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

## Requisitos Previos

- Node.js (>= 12.x)
- npm (>= 6.x)
- MySQL (>= 5.7)
## Documentación

  https://documenter.getpostman.com/view/21961268/2sA3QwcVgs
  
## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/sanchezitos/school-scheduler.git
   cd school-scheduler
   
2. Instala las dependencias:
   ```bash
   npm install

3. Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
   ```bash
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_DATABASE=nombre_de_tu_base_de_datos
   
## Ejecución

Para iniciar el servidor de desarrollo, ejecuta:
  ```bash
  npm run start:dev

