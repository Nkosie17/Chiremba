#!/bin/bash

# Start Node.js backend
cd server && node index.js &

# Start Python FastAPI server
cd .. && python src/hostlocal.py
