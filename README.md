# ThinkBoard - Client Setup Guide

ThinkBoard is a full-stack note-taking application with a Node.js + Express backend and a React + Vite frontend.
This guide will walk you through all the steps to **install dependencies, configure accounts, and run the project locally**.

---

## 1. Prerequisites

Before starting, make sure you have the following installed on your machine:

* **Node.js** (version 16 or higher)
* **npm** or **yarn**
* **Git**

You will also need accounts for:

1. **MongoDB Atlas** (or another MongoDB database)
2. **Upstash Redis** (for rate limiting)

---

## 2. Clone the Repository

```bash
git clone https://github.com/HAMYL-Aththnayaka/ThinkBoard.git
cd ThinkBoard
```

---

## 3. Backend Setup

### 3.1 Navigate to backend

```bash
cd backend
```

### 3.2 Install Dependencies

```bash
npm install
```

**Dependencies include:**

* express
* mongoose
* dotenv
* cors
* @upstash/redis
* @upstash/ratelimit
* nodemon (for development)

### 3.3 Create `.env` File

Create a `.env` file in the `backend` folder. Example:

```env
# MongoDB connection string
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.9ghkovn.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0

# Backend server port
PORT=3000

# Upstash Redis for rate limiting
UPSTASH_REDIS_REST_URL=https://<your_upstash_instance>.upstash.io
UPSTASH_REDIS_REST_TOKEN=<your_upstash_token>
```

> Replace placeholders with your actual credentials.

### 3.4 Start Backend Server

```bash
npm run dev
```

> Or run manually:

```bash
node src/server.js
```

---

## 4. Frontend Setup

### 4.1 Navigate to frontend

```bash
cd ../frontend
```

### 4.2 Install Dependencies

```bash
npm install
```

**Dependencies include:**

* react
* react-dom
* vite
* tailwindcss
* daisyui
* react-router-dom

### 4.3 Create `.env` File (Optional)

If your frontend needs environment variables, create a `.env` file:

```env
VITE_API_URL=http://localhost:3000/api
```

### 4.4 Start Frontend Server

```bash
npm run dev
```

* Open your browser at `http://localhost:5173`
* Frontend should connect to the backend automatically

---

## 5. Create Accounts (if required)

1. Open the frontend GUI (`http://localhost:5173`)
2. Use the **Sign Up / Register** page to create a new account
3. Log in with the account to start creating and managing notes

> Make sure the backend server is running before signing up.

---

## 6. Ignored Files (`.gitignore`)

The following files are automatically ignored by Git:

* **Logs:** `*.log`, `npm-debug.log*`, `yarn-debug.log*`
* **Dependencies / Build Outputs:** `node_modules/`, `dist/`, `dist-ssr/`
* **Environment files:** `.env`, `*.local`
* **Editor & OS files:** `.vscode/` (except `extensions.json`), `.idea/`, `.DS_Store`, `*.suo`, `*.ntvs*`, `*.njsproj`, `*.sln`, `*.sw?`

---

## 7. Usage

1. Start the backend server
2. Start the frontend server
3. Open the browser at `http://localhost:5173`
4. Create an account (if required)
5. Use the GUI to create, view, edit, or delete notes

---
## 8. Sample Outputs 

If you encounter any issues:

* Check that all dependencies are installed correctly
* Verify `.env` variables are set properly
* Ensure MongoDB and Redis accounts are active and credentials are correct
* Contact the project creator via GitHub issues or aththanayakayasas@gmail.com

---

## 10. License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file.
