# Stage 1: Build frontend
FROM node:20-slim AS frontend-builder

WORKDIR /app

# Copy package files for frontend
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source
COPY . .

# Build frontend
RUN npm run build

# Stage 2: Build Python backend
FROM python:3.10-slim AS backend-builder

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy Python requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend files
COPY server ./server
COPY src/hostlocal.py ./src/hostlocal.py

# Copy built frontend from previous stage
COPY --from=frontend-builder /app/dist ./dist

# Create start script
RUN echo '#!/bin/bash\ncd server && node index.js &\ncd /app && python src/hostlocal.py' > /app/start.sh \
    && chmod +x /app/start.sh

# Expose ports
EXPOSE 5000 8000

# Start the application
CMD ["/app/start.sh"]
