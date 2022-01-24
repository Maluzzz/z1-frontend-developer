<div align="center">
  <h1 align="center"> 💳️ BankClient App</h3>
  <p align="center">
       App de BankClient donde se toma una foto y se comprueba con una API si esta es válida o no. 
    <br />
  </p>
  <p>
       <a href="https://z1-frontend-developer-maaluuz.vercel.app/">
     🚀 BankClient en producción! </a> 
    </p>
</div>
<hr/>
   <br />

[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=shield)](https://circleci.com/gh/Maluzzz/z1-frontend-developer)

## ⚙️ ¿Qué he usado? 

Herramientas & librerías usadas para el projecto:

* [React.js](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [React-routes](https://reactrouter.com/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/docs/en/configuration.html)
* [Jest](https://jestjs.io/)
* [CircleCI](https://circleci.com/)
<br/>
<br/>

## 📝 Requisitos 
Node tiene que estar instalado en el sistema, puedes:
* Instalar node directamente [Node.js](https://nodejs.org/en/)
* Usa [nvm](https://github.com/nvm-sh/nvm)

<hr/>
<br/>

## 👨‍💻 Lanza proyecto en Local 


1. Clona el repositorio
```
git clone https://github.com/Maluzzz/z1-frontend-developer.git
```
2. Sitúate en la carpeta del proyecto
```
cd z1-frontend-developer
```
3. Instala las librerías

```
npm i
```

4. Lanza la app
```
npm run start
```

Este último paso debe abrir el navegador de tu ordenador con la url `localhost:3000/`
y debes ver una pantalla como esta:
<br/>
<br/>
<img src="https://i.ibb.co/FWPRkDM/image-1.png"
     alt="image"
     style="float: left; margin-right: 10px;" />

&nbsp;&nbsp;
## 📁 Estructura de ficheros 
- **assets**: Se ha usado para los iconos en svg e imágenes
- **components:** Componentes reutilizables, se han pensado para que puedan reutilizarse en diferentes proyectos y vistas. Header, Button, Labels...
- **containers:** Vistas y componentes. En este proyecto son sólo dos vistas: HomeView y PhotoView. Y dos componentes ligados al modelo, como es la vista de la cámara y el display del carnet.
- **model:** En este caso hemos incluido el fichero types para tipos de typescript, y el fichero theme con los colores "corporativos" de BankClient
- **utils:** Función fetcher para llamar al endpoint y otro fichero que contiene hook propio del proyecto.
<br/>

## 🚧 Roadmap y mejoras 

- \[ ] Añadir más test: Por ahora se cubren aspectos básicos, pero es necesario hacer mocks para el comportamiento de la cámara. 
- \[ ] Añadir más test con [user-event](https://testing-library.com/docs/dom-testing-library/api-events/)
- \[ ] Forzar a que la cámara se vea en horizontal en dispositivos móviles.
- \[ ] Si no se encuentra cámara disponible o no se le dan permisos se debe mostrar mensaje. 

<br/>

## 🙋 Comentarios

 Voy a dejar aquí reflejado algunos puntos y "problemas" que me he encontrado al desarrollar este proyecto.

- **Enzyme+Tests**: Intenté hacer los test con enzyme y jest, como están en el proyecto [gif-app](https://github.com/Maluzzz/gif-app) pero me encontré con un error que no conseguí solucionar [aquí](https://github.com/adriantoine/enzyme-to-json/issues/126) un issue abierto con el error. Por lo que me decanté por hacerlos con [react-testing-library](https://testing-library.com/).

- **Canvas e ImageCapture.takePhoto()**: intenté utilizar la interfaz de ImageCapture para tomar la foto, pero no es compatible con navegadores como: Safari, Firefox o internet explorer pero usar drawImage si lo era.

Hay algunas mejoras detalladas en Roadmap.
Empecé sin usar un patrón definido para los mensajes del commit pero, al final, he intentado commitear más frecuentemente y usar [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
