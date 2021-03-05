FROM node:latest

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/landing

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# env variables
ENV NODE_ENV=production

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]