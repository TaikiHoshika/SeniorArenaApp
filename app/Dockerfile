FROM node:18.16.0

WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install nodemon --save
RUN npm install express --save

COPY . .

EXPOSE 3000
CMD ["npm", "start"]