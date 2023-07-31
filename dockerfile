#Imagen base desde donde obtengo la imagen de cypress
FROM cypress/browsers:latest
#Crea un folder donde el proyecto será guardado
RUN mkdir /cucumberProject
# Se elige el archivo en el que se trabajará
WORKDIR /cucumberProject
#Se copian los archivos necesarios de cypress en la ruta requerida
COPY ./package.json .
COPY ./jsconfig.json .
COPY ./.cypress-cucumber-preprocessorrc.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Instalamos cypress
RUN npm install
#Ejecutamos commandos que el contenedor usara
ENTRYPOINT ["npx","cypress","run"]
#Poner mas parametros
CMD [""]