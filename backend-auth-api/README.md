# Backend Authentication & CRUD API

## 🚀 Live 
**API Base URL:** `https://auth-backend-qkek.onrender.com`

## 📋 Project Overview
A complete REST API built with Node.js and Express.js featuring JWT authentication, role-based authorization, and full CRUD operations with MongoDB.

## 🛠️ Technical Requirements

### Backend Stack
- **Node.js** + **Express.js** - Server framework
- **MongoDB** with **Mongoose** - Database
- **JWT** (JSON Web Tokens) - Authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Express Rate Limit** - Request limiting

### API Standards
- RESTful API principles
- JSON responses only
- Meaningful HTTP status codes
- Consistent error handling

## 📊 API Structure

### Authentication Routes
/api/auth/register - POST - Register new user
/api/auth/login - POST - Login user
/api/auth/me - GET - Get current user (Protected)
/api/auth/updatedetails - PUT - Update user details (Protected)
/api/auth/updatepassword - PUT - Update password (Protected)

text

### Product Routes
/api/products - GET - Get all products (Public)
/api/products/:id - GET - Get single product (Public)
/api/products - POST - Create product (Admin only)
/api/products/:id - PUT - Update product (Admin only)
/api/products/:id - DELETE - Delete product (Admin only)

text

## 📝 Response Structure

### Success Response
```json
{
  "status": "success",
  "message": "Operation completed successfully",
  "data": {
    
  }
}
Error Response
json
{
  "status": "error",
  "message": "Descriptive error message"
}
Pagination Response
json
{
  "status": "success",
  "results": 10,
  "data": {
    "products": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "pages": 10
    }
  }
}
🚦 HTTP Status Codes
200 - OK

201 - Created

400 - Bad Request

401 - Unauthorized

403 - Forbidden

404 - Not Found

500 - Internal Server Error

📚 API Documentation
Base URLs
Production: https://auth-backend-qkek.onrender.com

Local Development: http://localhost:5000

Authentication Endpoints
Register User
URL: POST /api/auth/register

Access: Public

Body:

json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "password": "password123",
  "role": "admin"
}
Login User
URL: POST /api/auth/login

Access: Public

Body:

json
{
  "email": "john@example.com",
  "password": "password123"
}
Get Current User
URL: GET /api/auth/me

Access: Private (Requires JWT token)

Headers: Authorization: Bearer your_jwt_token

Product Endpoints
Get All Products
URL: GET /api/products

Access: Public

Query Parameters:

page - Page number (default: 1)

limit - Items per page (default: 10)

category - Filter by category

search - Search in name/description

Create Product
URL: POST /api/products

Access: Admin only

Headers: Authorization: Bearer your_jwt_token

Body:

json
{
  "name": "iPhone 15",
  "description": "Latest smartphone",
  "price": 999.99,
  "category": "electronics",
  "stockQuantity": 50
}
🔐 Authentication Flow
Register user → Get JWT token

Login with credentials → Get JWT token

Use token in Authorization header: Bearer your_token

Admin routes require user role: "admin"

🧪 Testing with Postman
Import the Postman collection file (back-end proo.postman_collection.json) from this repository to test all API endpoints. The collection includes examples for both local development (http://localhost:5000) and production environments.

🔧 Installation & Setup
bash
#  repository
git https://github.com/emann0001/auth-backend.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev
⚙️ Environment Variables
env
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
BCRYPT_ROUNDS=12
🛡️ Security Features
Password hashing with bcrypt

JWT token-based authentication

Rate limiting (100 requests/15 minutes)

Helmet.js security headers

CORS enabled

Input validation and sanitization

POST MAN PUBLISHED LINK https://documenter.getpostman.com/view/43289116/2sB3WvNdks