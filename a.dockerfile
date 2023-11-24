# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto 3000 para que pueda ser accedido desde fuera del contenedor
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "start"]
