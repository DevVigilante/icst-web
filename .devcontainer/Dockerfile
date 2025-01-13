# Use Node.js 16 base image
FROM node:16-bullseye

# Set the working directory
WORKDIR /workspace

# Copy package.json and package-lock.json for dependencies
COPY package*.json ./

# Install dependencies
RUN npm install -g npm@8.0.0

# Default to bash shell
CMD ["/bin/bash"]
