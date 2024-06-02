# README.md

## Introducción

Este proyecto utiliza Docker para ejecutar una aplicación web con tres servicios principales: un frontend, un backend y una base de datos. Con este archivo `docker-compose.yml`, podrás levantar toda la aplicación con un solo comando.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu computadora:

- **Docker**: Puedes descargar e instalar Docker desde su [sitio oficial](https://www.docker.com/get-started).

## Archivos necesarios

Este proyecto necesita los siguientes archivos en el mismo directorio que el archivo `docker-compose.yml`:

- `dockerfile.frontend`: Archivo Docker para construir el servicio frontend.
- `dockerfile.backend`: Archivo Docker para construir el servicio backend.
- `init.sql`: Archivo SQL para inicializar la base de datos.
- `wait-for-it.sh`: Script para esperar que los servicios estén disponibles antes de inicializar la base de datos.

## Instrucciones

1. **Clona el repositorio o descarga los archivos** a tu computadora.
   
      ```sh
    git clone https://github.com/Sgz0722/assessment-factored.git
    ```

3. **Navega al directorio del proyecto** en tu terminal o línea de comandos.

4. **Levanta los servicios** ejecutando el siguiente comando:

    ```sh
    docker compose up --build
    ```

    Esto construirá y ejecutará los contenedores para el frontend, el backend y la base de datos. La primera vez que ejecutes este comando, Docker descargará las imágenes necesarias y construirá los contenedores, lo cual puede tomar unos minutos.

5. **Accede a la aplicación**:
    - **Frontend**: Abre tu navegador web y visita `http://localhost:5173`.

## Detalles de los Servicios

- **Frontend**:
  - Se construye usando el archivo `dockerfile.frontend`.
  - Está mapeado al puerto `5173` de tu computadora.
  - Depende del servicio backend.
  - Usa la variable de entorno `VITE_BACKEND_URL` para comunicarse con el backend.

- **Backend**:
  - Se construye usando el archivo `dockerfile.backend`.
  - Está mapeado al puerto `5000` de tu computadora.
  - Depende del servicio de base de datos.
  - Usa la variable de entorno `DATABASE_URL` para conectarse a la base de datos.

- **Base de datos (MySQL)**:
  - Usa la imagen oficial de MySQL versión `8.0`.
  - Está mapeado al puerto `3306` de tu computadora.
  - Las credenciales de acceso y el nombre de la base de datos están definidos en las variables de entorno.

- **db_init**:
  - Se utiliza para inicializar la base de datos con el archivo `init.sql`.
  - Espera que el backend y la base de datos estén disponibles antes de ejecutar el script SQL.

## Notas

- **Persistencia de Datos**: Los datos de la base de datos se almacenan en un volumen de Docker llamado `db_data`. Esto asegura que los datos no se pierdan cuando los contenedores se detengan o se reinicien.
- **Red de Docker**: Todos los servicios están conectados a una red de Docker llamada `app-network`.

## DATOS PRUEBAS
```sh
('user1', 'password1'),
('user2', 'password2'),
('user3', 'password3'),
('user4', 'password4'),
('user5', 'password5'),
('user6', 'password6'),
('user7', 'password7'),
('user8', 'password8'),
('user9', 'password9'),
('user10', 'password10'),
('user11', 'password11'),
('user12', 'password12'),
('user13', 'password13'),
('user14', 'password14'),
('user15', 'password15'),
('user16', 'password16'),
('user17', 'password17'),
('user18', 'password18'),
('user19', 'password19'),
('user20', 'password20');

    ```

Si encuentras algún problema o tienes preguntas, no dudes en buscar ayuda en la documentación oficial de Docker o en foros de la comunidad. ¡Disfruta construyendo tu aplicación!
