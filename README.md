# Todo App

## Overview
The **Todo App** is a full-stack web application for managing tasks efficiently. Users can create, update, and delete their todos with a user-friendly interface. The app supports real-time updates, pagination, and a clean UI for seamless task management.

## Features
- 📝 **Create, Read, Update, Delete (CRUD)** functionality for todos.
- 📌 **Pagination** to manage a large list of tasks.
- ✨ **Real-time Updates**: Automatic UI updates after actions.
- 🖋️ **Rich Editor** for writing detailed task descriptions.
- 🗑️ **Delete Todos** with a confirmation.
- 📅 **Formatted Date Display** for better readability.

## Tech Stack
### **Frontend**
- **React.js** (with React Router for navigation)
- **CSS** (custom styling, no Tailwind used)

### **Backend**
- **Node.js** & **Express.js** (REST API development)
- **MongoDB** (Database for storing todos)
- **Mongoose** (ODM for MongoDB)

## Installation & Setup
### **1. Clone the Repository**
```bash
git clone https://github.com/Pranav-Pote-28/Todo_Application/tree/master
cd todo-app
```

### **2. Install Dependencies**
#### **Backend**
```bash
cd backend
npm install
```
#### **Frontend**
```bash
cd frontend
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the `backend` folder:
or
Checkout the env file in backend/ folder
```

### **4. Run the Application**
#### **Backend**
```bash
cd backend/src
npx nodemon server.js
```
#### **Frontend**
```bash
cd frontend
npm start (or) npm run dev
```


## License
This project is **open-source** under the MIT License.

---
