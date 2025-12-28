# 🎓 AI-Powered Quiz App (Frontend)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

This is the frontend repository for the **AI-Powered Quiz Application**. It provides a sleek, responsive user interface for generating quizzes via AI, managing user sessions, and visualizing quiz results.

> [!IMPORTANT]
> This frontend requires the **[AI-Powered Quiz App Backend](https://github.com/ThilinaJayamal/AI-powerd-Quiz-App-Backend)** to be running to handle AI processing, database storage, and authentication.

---

## ✨ Features

- 🧠 **AI-Driven Question Generation**: Interface for generating custom quizzes on any topic.
- 📊 **Performance Analytics**: Visual score summaries and progress tracking.
- ⏱️ **Timed Quizzes**: Interactive quiz player with real-time countdowns.
- 📱 **Mobile First**: Fully responsive design for learning on the go.
- 🔒 **Secure Auth**: Integrated login and registration flows.

---

## 🛠️ Tech Stack

- **Framework**: [React.js](https://reactjs.org/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API
- **API Communication**: [Axios](https://axios-http.com/)

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: (v16.0 or higher)
- **Backend Service**: You must have the [Backend API](https://github.com/ThilinaJayamal/AI-powerd-Quiz-App-Backend) running.

### 2. Installation
```bash
# Clone the frontend repository
git clone https://github.com/ThilinaJayamal/AI-powerd-Quiz-App-Frontend.git
cd AI-powerd-Quiz-App-Frontend

# Install dependencies
npm install

```

### 3. Environment Setup

Create a `.env` file in the root directory and point it to your backend URL:

```env
VITE_API_BASE_URL=http://localhost:8080/api

```

### 4. Run Development Server

```bash
npm run dev

```

The application will launch at `http://localhost:5173`.

---

## 🔗 Related Repositories

| Repository | Role | Link |
| --- | --- | --- |
| **Backend** | API, Database, AI Logic | [View Repository](https://github.com/ThilinaJayamal/AI-powerd-Quiz-App-Backend) |
| **Frontend** | User Interface & UX | (This Repository) |

---

## 📂 Project Structure

```text
src/
├── assets/        # Images and global styles
├── components/    # Reusable UI (Buttons, Navbar, Quiz Cards)
├── context/       # Auth and Quiz state management
├── pages/         # View components (Home, Dashboard, QuizView)
├── services/      # API wrappers for backend communication
└── App.jsx        # Main routing and entry point

```

---

## 🤝 Contributing

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 👤 Author

**Thilina Jayamal** - GitHub: [@ThilinaJayamal](https://github.com/ThilinaJayamal)

* Backend Repo: [AI-powerd-Quiz-App-Backend](https://github.com/ThilinaJayamal/AI-powerd-Quiz-App-Backend)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
