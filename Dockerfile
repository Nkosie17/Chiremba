# Use Node.js LTS version
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY server/package*.json ./server/

# Install dependencies
RUN npm install
RUN cd server && npm install

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Start a new stage for the final image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install Node.js in the final image
RUN apt-get update && apt-get install -y \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy Python requirements and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy built frontend and backend files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/src ./src
COPY --from=builder /app/package*.json ./

# Create start script
RUN echo '#!/bin/bash\ncd server && node index.js &\ncd /app && python src/hostlocal.py' > /app/start.sh \
    && chmod +x /app/start.sh

# Expose ports
EXPOSE 5000 8000

# Start the application
CMD ["/app/start.sh"]
