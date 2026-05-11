FROM node:20-slim

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all application files (including server.js and public folder)
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["node", "server.js"]