FROM node:8
COPY index.js  . 
COPY package.json . 
RUN  npm install 
EXPOSE 3000
ENTRYPOINT [ "npm" , "start" ]

# docker build -t nileshvinsys/micronode1  . 
# this reads the docker files and does all the activities defined in the docker file 
