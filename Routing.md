# Routing

Concepto de **routing** informado por ChatGPT.

El **routing** (o enrutamiento) en el contexto de aplicaciones web se refiere al proceso de **dirigir peticiones (requests) que hace un cliente** (normalmente un navegador) **a los controladores o funciones correctas en un servidor**. En otras palabras, es el mecanismo que define cómo se responde a diferentes URLs y tipos de peticiones (GET, POST, PUT, DELETE, etc.).

## Cómo funciona el Routing:

1. **Cliente hace una petición**: Cuando el cliente (usuario) navega a una URL o envía un formulario, el navegador envía una petición HTTP al servidor.
   
2. **El servidor analiza la URL**: El servidor examina la URL y el tipo de petición (GET, POST, etc.) para determinar qué acción debe tomar.

3. **El Router**: En el servidor, el router tiene una lista de reglas o rutas predefinidas. Cada ruta tiene un patrón de URL asociado a una función o controlador que maneja la petición.

4. **El controlador maneja la petición**: Si el router encuentra una coincidencia entre la URL solicitada y una de sus rutas, redirige la petición a la función o controlador correspondiente. Ese controlador es el encargado de procesar la información, interactuar con la base de datos si es necesario, y devolver una respuesta (HTML, JSON, etc.).

5. **Respuesta al cliente**: El servidor genera una respuesta (por ejemplo, una página HTML, un archivo JSON) y la envía de vuelta al cliente.

### Ejemplo de routing básico:
Imagina que estás trabajando con una aplicación web y el usuario accede a la siguiente URL:

```
https://miapp.com/usuarios/123
```

El sistema de **routing** del servidor interpretaría esto de la siguiente manera:

- `/usuarios` indica que el cliente está solicitando acceso al recurso de "usuarios".
- `123` es probablemente un parámetro (ID del usuario) que el servidor utilizará para saber a qué usuario específico se refiere la solicitud.

Dependiendo de si es una petición GET o POST, el servidor ejecutará una función que tal vez **muestre los datos del usuario con ID 123** (GET) o **actualice esos datos** (POST).

## Ejemplo de código con rutas (usando Node.js y Express):
```js
const express = require('express');
const app = express();

// Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  res.send('Lista de usuarios');
});

// Ruta para obtener un usuario específico
app.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Usuario con ID ${userId}`);
});

// Ruta para actualizar un usuario
app.post('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  // Lógica para actualizar el usuario
  res.send(`Usuario con ID ${userId} ha sido actualizado`);
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
```

Aquí se definen tres rutas:
- `/usuarios` para obtener todos los usuarios.
- `/usuarios/:id` para obtener o actualizar un usuario específico por su ID.

## Beneficios del Routing:
- **Organización del código**: Facilita la división del código en controladores específicos para cada ruta o grupo de rutas.
- **Escalabilidad**: Permite agregar y gestionar fácilmente nuevas rutas a medida que crece la aplicación.
- **Claridad en el acceso a recursos**: Asigna URLs claras y semánticas a diferentes recursos de la aplicación (ej. `/productos`, `/usuarios`, etc.).

## Recursos adicionales

Para aprender más sobre **routing** acceder a los siguientes enlaces:

* [Routing](https://expressjs.com/en/guide/routing.html) explicado en la documentación de Express.js.