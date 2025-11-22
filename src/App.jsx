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

function App() {

  const { loadUser, user, isFetching, logout } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, [])

  if (isFetching) {
    return (
      <div className='w-full h-screen flex gap-3 flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold animate-pulse text-gray-900'>Quiz?<span className='text-blue-500'>Master</span></h1>
        <p className='text-sm text-blue-500 border border-blue-500/30 bg-blue-200/40 px-4 py-1 rounded-full'>Please, wait a moment!</p>
      </div>
    )
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