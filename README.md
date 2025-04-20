# AI Symptom Solutions

A comprehensive medical diagnosis system using AI to analyze medical images and provide preliminary diagnoses.

## Features

- Image-based medical diagnosis
- User authentication and authorization
- Multiple disease detection models
- Secure API endpoints
- Modern React frontend

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- ML Server: Python + FastAPI
- Database: MongoDB
- Authentication: JWT

## Prerequisites

- Node.js (v16 or higher)
- Python (v3.10 or higher)
- MongoDB

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-symptom-solutions.git
cd ai-symptom-solutions
```

2. Install dependencies:
```bash
# Install frontend and Node.js backend dependencies
npm install

# Install Python dependencies
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development servers:
```bash
# Start all services
npm run dev:full

# Or start services individually:
npm run dev          # Frontend
npm run start:backend # Node.js backend
npm run start:ml     # Python ML server
```

## Deployment

This project is configured for deployment on Railway.app:

1. Push your code to GitHub
2. Create a new project on Railway
3. Connect your GitHub repository
4. Set up the environment variables in Railway dashboard
5. Deploy!

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `PORT`: Express server port (default: 5000)
- `FASTAPI_PORT`: ML server port (default: 8000)
- `VITE_EXPRESS_API_URL`: Backend API URL
- `VITE_FASTAPI_URL`: ML server URL

## Project Structure

```
ai-symptom-solutions/
├── src/                  # Frontend source code
│   ├── components/       # React components
│   └── hostlocal.py     # ML server
├── server/              # Node.js backend
│   └── index.js        # Express server
├── public/             # Static files
└── package.json        # Project configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
