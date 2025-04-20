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

# Start a new stage for Python
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy Python requirements and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy built frontend and backend files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/src/hostlocal.py ./src/hostlocal.py

# Expose ports
EXPOSE 5000 8000

# Start both servers using a shell script
COPY <<EOF ./start.sh
#!/bin/bash
cd server && node index.js &
python src/hostlocal.py
EOF

RUN chmod +x start.sh

# Start the application
CMD ["./start.sh"]
