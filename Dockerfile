# Use the official Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the necessary files to the container
COPY server.js decoder.js tsconfig.json package.json /app/

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
