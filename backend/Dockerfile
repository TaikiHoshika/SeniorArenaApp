FROM node:18.16.0

WORKDIR /backend

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3030
CMD ["npm", "start"]