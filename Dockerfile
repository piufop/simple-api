FROM node:carbon-slim

# Create app directory
WORKDIR /opt/simple-api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

USER node

EXPOSE 5000

ENTRYPOINT ["sh", "docker-entrypoint.sh"]
