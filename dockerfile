# Use a Node.js base image
FROM node:latest

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia el código de la aplicación al directorio de trabajo del contenedor
COPY ./src ./src

# Instala las dependencias
RUN npm install

# Transpila el código TypeScript
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Ejecuta la aplicación
CMD ["npm", "start"]



