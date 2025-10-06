# Frontend para Aplicación Web Constructora

Proyecto generado usando [Angular CLI](https://github.com/angular/angular-cli) version 20.3.0.
Frontend para la aplicación web de una biblioteca, el backend está desarrollado el SrpingBoot.
Este proyecto es desarrollado como parte del curso <b>Soluciones Web y Aplicaciones Distribuidas</b> con <b>NRC 3423</b>, correspondiente al <b>período UPN 2025-2<b>

## Development server

Para iniciar el servidor local de desarrollo, ejecute:

```bash
ng serve
```

Cuando el servidor este corriendo, abrir el navegador y navegar a la url `http://localhost:4200/`. La aplicación se actualizará automáticamente cuando cuando modifique los archivos.
Para iniciar el servidor local y abrir el navegador, ejecute:

```bash
ng serve -o
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Ejecutar el proyecto

Después de descargar o clonar el presente proyecto, navegue hasta la carpeta del proyecto y para descargar las dependencias, ejecute:

```bash
npm install
```

## Documentación

Crear el proyecto

```bash
ng new constructapp-frontend
```

Navegar a la carpeta del proyecto

```bash
cd constructapp-frontend
```

Crear un componente

```bash
ng generate component pages/component_name --skip-tests
```

Crear un servicio
```bash
ng generate service services/service_name --skip-tests
```

Agregar estilos: [angular material](https://material.angular.io/), para otro tipo de estilos visite las documentaciones correspondientes.

```bash
ng add @angular/material
```

Generar los archivos del environment

```bash
ng generate environments
```
Generar un archivo de centralización de las importaciones

```bash
ng generate module material
```

Instalar auth0/angular-jwt. Esta libreria ayuda, tiene utilitarios para ver si el token ha expirado o no

```bash
npm install @auth0/angular-jwt

```