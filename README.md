# Digital Lost and Found System

A full-stack web application for managing lost and found items, built with React, Node.js, and MongoDB.

## Features

- User authentication and authorization
- Admin dashboard for managing users and items
- User dashboard for reporting lost and found items
- Contact messaging system
- Image upload for items
- Search and filter functionality
- Responsive design

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4.4 or higher)

## Installation

### Clone the repository
```bash
git clone <repository-url>
cd final-project
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Windows

1. Start MongoDB:
```bash
# If MongoDB is installed as a service, it should be running automatically
# If not, start MongoDB manually:
"C:\Program Files\MongoDB\Server\{version}\bin\mongod.exe"
```

2. Start the backend server:
```bash
cd backend
npm run dev
```

3. In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```

### Linux

1. Start MongoDB:
```bash
# If MongoDB is installed as a service
sudo systemctl start mongod

# If not installed as a service
mongod --dbpath /var/lib/mongodb
```

2. Start the backend server:
```bash
cd backend
npm run dev
```

3. In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```

### macOS

1. Start MongoDB:
```bash
# If installed via Homebrew
brew services start mongodb-community

# If not using Homebrew
mongod --config /usr/local/etc/mongod.conf
```

2. Start the backend server:
```bash
cd backend
npm run dev
```

3. In a new terminal, start the frontend:
```bash
cd frontend
npm run dev
```

## Accessing the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- API Documentation: http://localhost:5000/api-docs

## Default Admin Account

After first run, you can register an admin account using the `/admin/register` endpoint:

```bash
curl -X POST http://localhost:5000/admin/register \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your_password"}'
```

## Project Structure

```
final-project/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── index.js
│   │   └── swagger.json
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── AdminDashboard/
    │   ├── UserDashboard/
    │   ├── Context/
    │   └── App.jsx
    ├── package.json
    └── vite.config.js
```

## API Endpoints

### Authentication
- POST `/auth/signup` - Register a new user
- POST `/auth/login` - User login
- POST `/admin/login` - Admin login

### Items
- GET `/lostItems` - Get all lost items
- POST `/lostItems` - Create a new lost item
- GET `/foundItems` - Get all found items
- POST `/foundItems` - Create a new found item

### Users
- GET `/users` - Get all users
- GET `/users/{id}` - Get user by ID
- PUT `/users/{id}` - Update user
- DELETE `/users/{id}` - Delete user

### Contacts
- GET `/contacts` - Get all contact submissions
- POST `/contacts` - Submit a contact form

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email [your-email@example.com] or open an issue in the repository. 