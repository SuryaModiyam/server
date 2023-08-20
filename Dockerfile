# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory
WORKDIR /server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose a port the app will listen on
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app.js"]
