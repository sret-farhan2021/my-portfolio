# Use the official Node.js image.
FROM node:18

# Set the working directory.
WORKDIR /workspace

# Install any necessary packages (e.g., git, build tools).
RUN apt-get update && apt-get install -y \
  git \
  build-essential

# Install dependencies.
COPY package*.json ./
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose port 3000 for the React app.
EXPOSE 3000

# Start the development server.
CMD ["npm", "start"]
