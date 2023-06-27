# Journal App - Aplicación de Notas

Esta es una aplicación de notas interactiva desarrollada utilizando Firebase, ReactJS, Material-UI, Redux, Vite y Cloudinary. La aplicación te permite crear, editar y eliminar notas, así como subir imágenes asociadas a cada entrada de notas. También ofrece funciones de autenticación para iniciar sesión con Google o registrar una cuenta utilizando correo electrónico.

## Características

- Autenticación de usuario: Inicia sesión utilizando tu cuenta de Google o regístrate con tu correo electrónico.
- Creación de notas: Crea nuevas entradas de notas, añadiendo un título y contenido.
- Subida de imágenes: Puedes subir y almacenar imágenes asociadas a cada nota utilizando Cloudinary.
- Edición de notas: Modifica el título y contenido de tus notas existentes.
- Eliminación de notas: Elimina las notas que ya no necesitas.

## Tecnologías utilizadas

- Firebase: Autenticación de usuarios y almacenamiento de datos.
- ReactJS: Framework utilizado para el desarrollo de la interfaz de usuario.
- Material-UI: Biblioteca de componentes de interfaz de usuario que proporciona estilos predefinidos y un diseño atractivo.
- Redux: Utilizado para el manejo del estado global de la aplicación.
- Vite: Entorno de desarrollo rápido y moderno.
- Cloudinary: Servicio de almacenamiento de imágenes utilizado para guardar las imágenes asociadas a las notas.

## Instalación y configuración

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando el comando `pnpm install`.
3. Crea un proyecto en Firebase y configura la autenticación de Google.
4. Crea un archivo `.env` en la raíz del proyecto y añade las credenciales de Firebase:
    VITE_REACT_APP_API_KEY=your_api_key
    VITE_REACT_APP_AUTH_DOMAIN=your_auth_domain
    VITE_REACT_APP_PROJECT_ID=your_project_id
    VITE_REACT_APP_STORAGE_BUCKET=your_storage_bucket
    VITE_REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_REACT_APP_APP_ID=your_app_id

5. Asegúrate de tener una cuenta en Cloudinary y actualiza las credenciales en el código según sea necesario.
6. Ejecuta la aplicación utilizando el comando `pnpm run dev`.

¡Listo! Ahora puedes acceder a la aplicación en tu navegador en la dirección [http://localhost:3000](http://localhost:3000).


## Dedicaciones

Este proyecto fue parte del curso de [DEVTALLES](https://cursos.devtalles.com/).
Muy agradecido con el profesor ya que aprendi demasiado.
