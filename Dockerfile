# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install dependencies.
COPY package*.json ./
RUN npm install

# Copy application code.
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Run the web service on container startup.
CMD [ "npm", "start" ]
