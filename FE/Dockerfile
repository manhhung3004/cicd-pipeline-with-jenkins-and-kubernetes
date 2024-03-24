# Use official Node.js image as base image
FROM node:20.11-alpine
# Set the working directory in the container
WORKDIR /app
# Copy the entire project to the working directory
COPY . .
# Install dependencies
RUN npm install
# Build the project
RUN npm run build
# Expose port 3000
EXPOSE 3000
# Command to run the application
CMD ["npm", "start"]
