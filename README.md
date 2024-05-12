# Notas tomadas del curso The Complete 2024 Web Development Bootcamp

En este repositorio dejo algunas notas y en algunos ejercicios resueltos del curso de Angela Yu en Udemy, [The Complete 2024 Web Development Bootcamp
](https://www.udemy.com/course/the-complete-web-development-bootcamp/).

Aquí están los apuntes manucritos 👉🏻 [Apuntes manuscritos](./Apuntes-manuscritos.pdf)

## Links de interés

* [Web Development Course Resources](https://www.appbrewery.co/p/web-development-course-resources/)
* [Lorem Ipsum Generator](https://www.lipsum.com/)
* [Funny Lorem Ipsum Generators](https://blog.prototypr.io/top-10-funny-lorem-ipsum-generators-to-make-your-design-mockups-more-beautiful-797ce0bd7dd2)

## Notas

✔ Diferencias entre Back-end y Front-end 👉🏻 [aquí](https://www.computerscience.org/bootcamps/resources/frontend-vs-backend/)

### Seis pasos para crear un servido Express

1. Crear directorio
2. Crear archivo `index.js`
3. Inicializar NPM
    Ejecutando el comando `npm init`
    O el comando `npm init -y` para que acepte todas las opciones por defecto.
4. Instalar el paquete Express
    Ejecutando el comando `npm install express`
    Agregar la línea `type: "module"` tal como quedó en este archivo 👉🏻 [package.json](./Backend/3.1-Express-Server/package.json)
5. Escribir la aplicación del servidor en `index.js`
6. Inicializar el servidor
    Ejecutando el comando `node index.js` o `nodemon index.js`

El comando `npm install` instala las dependencias que se encuentran en el archivo `package.json`.

### HTTP

Protocolo de Tranferencia de Hiper Texto es el lenguaje que permite a las computadoras comunicarse entre sí.

En [Wikipedia](https://en.wikipedia.org/wiki/HTTP) y en [W3schools](https://www.w3schools.com/whatis/whatis_http.asp) se explica este asunto.

5 palabras principales en HTTP:
1. GET
2. POST
3. PUT
4. PATCH
5. DELETE