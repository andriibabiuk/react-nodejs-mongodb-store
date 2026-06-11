# 🛒 React Node.js MongoDB Store

A full-stack e-commerce application built with **React**, **Node.js**, **Express**, and **MongoDB**, featuring secure authentication, product management, image uploads, and paginated product browsing.

## 🚀 Overview

This application provides a simple online store experience where users can:

- Create accounts and authenticate securely
- Browse products with pagination
- View detailed product information
- Create and edit products
- Store and retrieve data from MongoDB
- Consume a REST API built with Express

The project showcases practical full-stack development using JavaScript across both frontend and backend.

---

## ✨ Features

### 🔐 Authentication

- User registration
- User login
- Password hashing with BCrypt
- JWT-based authentication
- Token-based session handling

### 📦 Product Management

- Product listing
- Product details page
- Create products
- Edit existing products
- Product image support
- MongoDB persistence

### 📄 Pagination

- Server-side pagination
- Product sorting by price
- Optimized product loading

### 🎨 Frontend

- Built with React
- React Router navigation
- Axios for API communication
- Reusable UI components
- Modal and backdrop components
- Form validation

### ⚙️ Backend

- Express.js REST API
- MongoDB integration
- Environment-based configuration
- Static image serving
- Modular route architecture

---

## 🏗 Tech Stack

### Frontend

- React 16
- React Router DOM
- Axios
- CSS Modules / Component Styling

### Backend

- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcryptjs
- body-parser

### Database

- MongoDB
- MongoDB Native Driver

---

## 📁 Project Structure

```text
react-nodejs-mongodb-store/
│
├── backend/
│   ├── routes/
│   │   ├── auth.js
│   │   └── products.js
│   ├── images/
│   ├── app.js
│   ├── db.js
│   └── constants.js
│
├── src/
│   ├── components/
│   │   ├── Backdrop/
│   │   ├── Button/
│   │   ├── Header/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── Products/
│   │
│   ├── pages/
│   │   ├── Auth/
│   │   └── Product/
│   │
│   ├── App.js
│   └── index.js
│
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Prerequisites

Before running the project, ensure you have:

- Node.js (v18+ recommended)
- MongoDB (Local Installation or MongoDB Atlas)
- npm or Yarn

---

### Clone the Repository

```bash
git clone https://github.com/andriibabiuk/react-nodejs-mongodb-store.git
cd react-nodejs-mongodb-store
```

---

### Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the project directory:

Example:

```env
MONGO_URI=mongodb://localhost:27017/store
PORT=3100
REACT_APP_BACKEND_URL=http://localhost:3100

```

---

## ▶️ Running the Application

### Start Backend Server

```bash
npm run start:server
```

Backend will run on:

```text
http://localhost:3100
```

---

### Start Frontend

```bash
npm start
```

Frontend will run on:

```text
http://localhost:3000
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint  | Description         |
| ------ | --------- | ------------------- |
| POST   | `/signup` | Register a new user |
| POST   | `/login`  | Authenticate user   |

### Products

| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| GET    | `/products`     | Get paginated products |
| GET    | `/products/:id` | Get product details    |
| POST   | `/products`     | Create a product       |
| PUT    | `/products/:id` | Update a product       |

---

## 🔒 Security Features

- Password hashing using BCrypt
- JWT token generation
- Protected API endpoints
- Input validation
- Secure credential storage

---

## 📸 Images

Product images are served statically from:

```text
/backend/images
```

and exposed through:

```text
/images/*
```
