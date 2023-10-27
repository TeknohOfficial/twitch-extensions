# Use the official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available) to the working directory
COPY package.json ./

# Install dependencies using the package.json file
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application using nodemon
CMD ["npm", "start"]
