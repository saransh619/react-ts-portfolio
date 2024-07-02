# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the container
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally in the container
RUN npm install -g pnpm

# Install application dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on (port 5173 for Vite)
EXPOSE 5173

# Command to run the app
CMD ["npm", "start"]
