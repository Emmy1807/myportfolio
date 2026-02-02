FROM node:18-alpine

RUN apk add --no-cache openssl

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy the entire backend directory
COPY . .

# Generate Prisma Client inside container
RUN npx prisma generate

EXPOSE 5000

# Run migrations and start the server
CMD ["sh", "-c", "npx prisma db push --skip-generate && npm run dev"]
