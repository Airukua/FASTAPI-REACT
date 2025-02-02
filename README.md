# FastAPI + React with Vite + TailwindCSS: Simple Login Dashboard

This project demonstrates how to build a simple login dashboard home using **FastAPI** for the backend, **React** with **Vite** for the frontend, and **TailwindCSS** for styling. This setup provides a modern, fast, and efficient stack for developing full-stack web applications.

## Project Structure

```bash
├── backend/                  # FastAPI backend code
│   ├── main.py               # FastAPI application entry point
│   └── models.py             # Pydantic models
├── frontend/                 # React frontend code
│   ├── src/
│   │   ├── components/       # React components (e.g., login form, dashboard)
│   │   ├── App.jsx           # Main app component
│   │   └── tailwind.config.js # TailwindCSS configuration
│   └── public/               # Static files (index.html)
├── .gitignore                # Git ignore file
├── requirements.txt          # Python dependencies for FastAPI
├── package.json              # JavaScript dependencies for React/Vite
└── README.md                 # Project readme (this file)
```

## Features

- **Backend:** FastAPI API for login and dashboard routes.
- **Frontend:** React with Vite for a fast and modern development experience.
- **Styling:** TailwindCSS for utility-first styling.
- **Login System:** A simple login form with a dashboard view on successful authentication.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/fastapi-react-tailwind-dashboard.git
cd fastapi-react-tailwind-dashboard
```

### 2. Backend Setup (FastAPI)

#### Install dependencies

Create a virtual environment (optional but recommended):

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

#### Running the FastAPI Backend

To start the FastAPI backend server:

```bash
uvicorn backend.main:app --reload
```

The API should now be running at `http://localhost:8000`.

### 3. Frontend Setup (React + Vite)

#### Install dependencies

Navigate to the `frontend/` directory and install dependencies:

```bash
cd frontend
npm install
```

#### Running the React Frontend

To start the frontend development server:

```bash
npm run dev
```

The React app should now be running at `http://localhost:3000`.

### 4. TailwindCSS Setup (Frontend)

TailwindCSS is preconfigured with this project. All styles are based on utility-first classes, and you can customize them in the `tailwind.config.js` file.

For more info on customizing Tailwind, visit: https://tailwindcss.com/docs/configuration.

## Project Description

This project has two main parts:

### Backend (FastAPI)
The FastAPI backend serves as the API layer of the application. It provides:
- A `/login` route to authenticate users.
- A `/dashboard` route that returns a simple dashboard if the user is authenticated.

### Frontend (React with Vite)
The React frontend is created using Vite for fast builds and hot-reloading. The UI includes:
- A **Login Form**: Users enter their credentials to log in.
- A **Dashboard**: Displays a welcome message if authentication is successful.

The frontend sends API requests to the FastAPI backend for login validation.

### TailwindCSS
The UI is styled using **TailwindCSS**, which makes it easy to implement responsive and clean designs with utility classes. Customizations can be done by editing the Tailwind configuration.

## Endpoints

### `POST /login`
- **Description**: Authenticates the user.
- **Request Body**:
  ```json
  {
    "username": "user1",
    "password": "password123"
  }
  ```
- **Response**:
  - `200 OK` on success with a JWT token.
  - `401 Unauthorized` if login fails.

### `GET /dashboard`
- **Description**: Returns the dashboard if the user is authenticated (with JWT).
- **Response**:
  - `200 OK` with a dashboard message.
  - `401 Unauthorized` if no valid JWT token is provided.

## Dependencies

### Backend (FastAPI)

- `fastapi` – The web framework.
- `uvicorn` – ASGI server to run FastAPI.
- `pydantic` – For data validation and serialization.

### Frontend (React + Vite)

- `react` – Frontend JavaScript library.
- `vite` – A fast development build tool for React.
- `tailwindcss` – Utility-first CSS framework.

## Contributing

Feel free to fork this project, open issues, and submit pull requests. Any contribution is welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README provides a comprehensive guide for setting up and running your FastAPI + React application with TailwindCSS. Feel free to adapt it based on your actual project details. Let me know if you'd like me to help with any of the code or setup!
