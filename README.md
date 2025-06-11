# 🔐 User Login & Registration System (Node.js + TypeScript)

![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green.svg)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue.svg)
![Status](https://img.shields.io/badge/Project-Active-brightgreen.svg)

A modern user authentication system built with **Node.js**, **TypeScript**, and **PostgreSQL**, designed for scalable integration with frontend frameworks like Angular or React. This system securely handles user login and registration with a production-ready backend setup.

## 📌 Table of Contents

- 🧠 Overview  
- 📁 Folder Structure  
- 🛠️ Setup  
- 🚀 Running the Server  
- 🔐 Features  
- 🔍 Sample Outputs  
- 🧪 What You’ll Learn  
- 📦 Technologies Used  
- 🔧 Future Enhancements  
- 📄 License  

## 🧠 Overview

This project allows users to:
- Register with a username and password
- Log in securely with session-based or token-based flow (extendable)
- Integrate with a frontend at `http://localhost:4200`

Built using clean architecture and modular TypeScript code, it supports easy backend expansion.

## 📁 Folder Structure

```
user-login-system/
├── .env                 # Environment variables
├── db-connect.ts        # PostgreSQL connection logic
├── index.ts             # Main server file
├── login.html           # Sample login UI
├── users.html           # Post-login user page
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## 🛠️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/user-login-system.git
cd user-login-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

✅ A `.env` file is already provided. It looks like this:

```env
FRONTEND_URL=http://localhost:4200
SQL_URL=postgresql://userApp_owner:ge3xQTU2sNfG@ep-calm-tooth-a5k5kru1.us-east-2.aws.neon.tech/userApp?sslmode=require
PORT=3080
```

> 📌 Update these values only if you're changing the frontend URL, backend port, or database credentials.

## 🚀 Running the Server

### Compile TypeScript & Run

```bash
npx ts-node index.ts
```

> Or compile and run with Node:
```bash
tsc
node dist/index.js
```

## 🔐 Features

- Secure login and registration
- PostgreSQL cloud-hosted DB support
- Environment-variable configuration
- Type-safe modular backend
- Easy frontend integration (Angular, React, HTML)

## 🔍 Sample Outputs

### 🖼️ Login UI
![Login UI](https://github.com/user-attachments/assets/sample-login-ui.png)

### ✅ Successful Login Redirect
![User Page](https://github.com/user-attachments/assets/sample-user-ui.png)


## 🧪 What You’ll Learn

- How to build login systems with Node.js & PostgreSQL
- Using TypeScript for scalable backend logic
- Connecting to cloud databases with secure `.env` setup
- Serving HTML pages from Express
- Handling frontend-backend communication


## 📦 Technologies Used

| Tech          | Role                          |
|---------------|-------------------------------|
| Node.js       | Backend server runtime        |
| TypeScript    | Type-safe backend scripting   |
| PostgreSQL    | User data storage             |
| Express.js    | Web server framework          |
| dotenv        | Environment config            |
| HTML          | Basic UI for login/redirect   |

## 🔧 Future Enhancements *(Optional)*

- 🔒 Implement password hashing with `bcrypt`
- 🛡️ Add JWT-based authentication
- 🧾 Add form validation & error handling
- 🖼️ Add a frontend UI with Angular/React
- 📨 Send verification or welcome emails

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🔗 Repository Link

GitHub: [https://github.com/Suryapadmakar59/Gate-Pass-Management-System](https://github.com/Suryapadmakar59/Gate-Pass-Management-System)

## 👤 Developed By

Surya Padmakar  
[https://github.com/Suryapadmakar59/Gate-Pass-Management-System]

