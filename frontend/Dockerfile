FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy frontend code
COPY . .

# Build the React app
RUN npm run build

# Serve with a simple HTTP server
RUN npm install -g serve

EXPOSE 3000

# Serve the production build
CMD ["serve", "-s", "build", "-l", "3000"]
