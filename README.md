# Proyecto AWS Backend

Este repositorio contiene scripts y configuraciones para configurar y desplegar el backend de un proyecto en AWS. A continuación se detalla el proceso de configuración y ejecución del entorno.

## Requisitos

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) (si se usa AWS)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/)

## Script de Configuración

El siguiente script realiza las siguientes acciones:

1. Conéctate al bastión de AWS.
2. Conéctate al servidor backend.
3. Actualiza todas las dependencias.
4. Instala Git y Docker.
5. Inicia y habilita el servicio Docker.
6. Instala Docker Compose.
7. Clona el proyecto desde Git.
8. Construye y ejecuta la imagen Docker del backend.
9. Ejecuta la aplicación sin contenedor (opcional).

```bash
#!/bin/bash

# Llave bastion us-west-1a
ssh -i "bastion_key.pem" ec2-user@ec2-184-169-168-102.us-west-1.compute.amazonaws.com

# Llave backend 1 us-west-1a 10.1.83.39
ssh -i "backend-key.pem" ubuntu@10.1.83.39

# Actualizar todas las dependencias
sudo yum update -y

# Instalar Git
sudo yum install git -y

# Instalar Docker
sudo yum install docker -y

# Iniciar el servicio Docker
sudo systemctl start docker

# Habilitar Docker para que se inicie en el arranque
sudo systemctl enable docker

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Dar permisos de ejecución a Docker Compose
sudo chmod +x /usr/local/bin/docker-compose

# Clonar el proyecto desde Git
git clone https://github.com/johanbohorquez2021/proyecto_aws_backend.git

# Entrar al directorio del proyecto
cd proyecto_aws_backend/backend_app

docker run -d --network host bck2

curl localhost:3000

# Construir la imagen de Docker
docker build -t backend-app .

# Ejecutar el contenedor Docker
docker run -d --name backend-app -p 3000:3000 backend
docker run -d --network host backend-app

# Ejecutar la aplicacion sin contenedor
npm install
npm start
node index.js
