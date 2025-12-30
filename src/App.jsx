import React, { useEffect } from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import QuizGenerate from './pages/QuizGenerate'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import { useAuthStore } from './store/authStore'
import { Toaster } from 'react-hot-toast'
import QuizGeneratePDF from './pages/QuizGeneratePDF'
import MyQuizzess from './pages/MyQuizzess'
import MyAttempts from './pages/MyAttempts'
import SharedWithMe from './pages/SharedWithMe'
import Quiz from './pages/Quiz'
import QuizShare from './pages/QuizShare'
import Profile from './pages/Profile'
import PageLoader from './components/PageLoader'

function App() {

  const { loadUser, user, isFetching, logout } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, [])

  if (isFetching) {
    return <PageLoader text="Initializing your experience..." />
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/generate' element={(user && !isFetching) ? <QuizGenerate /> : <Navigate to={"/"} />} />
        <Route path='/generate-pdf' element={(user && !isFetching) ? <QuizGeneratePDF /> : <Navigate to={"/"} />} />
        <Route path='/login' element={(!user && !isFetching) ? <LoginPage /> : <Navigate to={"/dashboard"} />} />
        <Route path='/dashboard' element={(user && !isFetching) ? <Dashboard /> : <Navigate to={"/"} />} />
         <Route path='/profile' element={(user && !isFetching) ? <Profile/> : <Navigate to={"/"} />} />
        <Route path='/my-quizzes' element={(user && !isFetching) ? <MyQuizzess /> : <Navigate to={"/"} />} />
        <Route path='/my-attempts' element={(user && !isFetching) ? <MyAttempts /> : <Navigate to={"/"} />} />
        <Route path='/shared' element={(user && !isFetching) ? <SharedWithMe /> : <Navigate to={"/"} />} />
        <Route path='/share/:id' element={(user && !isFetching) ? <QuizShare/> : <Navigate to={"/"} />} />
        <Route path='/quiz/:id' element={(user && !isFetching) ? <Quiz/> : <Navigate to={"/"} />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  )
}

export default App