# Dockerfile

# Definir la imagen base
FROM node:14

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Instalar cors
RUN npm install cors

# Actualiza los repositorios e instala net-tools
RUN apt-get update && apt-get install -y net-tools curl

# Copiar el resto de los archivos
COPY . .

# Definir la variable de entorno con la dirección IP privada
ENV BACKEND_IP=10.1.91.179

# Definir la variable de entorno PORT
ENV BACKEND_LOCAL_PORT=3000
ENV BACKEND_DOCKER_PORT=3000

# Puerto que escucha el servidor
EXPOSE ${BACKEND_DOCKER_PORT}

# Puerto que escucha el servidor
# EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
