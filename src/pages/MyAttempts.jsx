import React, { useEffect } from 'react'
import { useQuizStore } from '../store/quizStore'
import { useNavigate } from 'react-router-dom';
import PageLoader from '../components/PageLoader'

function MyAttempts() {

  const { getMyAttempts, myAttempts, isLoading } = useQuizStore();
  const navigate = useNavigate();

  const updatedAttempts = myAttempts?.sort((a, b) => b.id - a.id);

  useEffect(() => {
    getMyAttempts();
  }, [])

  console.log(myAttempts)

  if (isLoading) {
    return <PageLoader text="Loading your attempts..." />
  }

  return (
    <div className='pt-20 bg-blue-50'>
      <div className='max-w-xl mx-auto py-12 min-h-screen px-4 xl:px-0'>
        <h1 className='text-4xl font-bold'>My Attempts</h1>
        <p className='text-gray-700 text-lg mt-2'>Check your attempts for get idea about your knowledge</p>
        <div className="grid grid-cols-1 gap-4 mt-12">
          {
            updatedAttempts.map((attempt, index) => (
              <div className='bg-white rounded-2xl p-6' key={index}>
                <h1 className='text-xl font-semibold border-b border-gray-500/40 pb-2'>Your Result is {Math.round(attempt?.result)}%</h1>
                <p className='text-base text-gray-700 mt-2'>Title: {attempt?.title}</p>
                <p className='text-gray-500 mt-2 text-xs'>Attempted At: {attempt?.attemptAt.substring(0, 10)}</p>
                <button className='mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 
                text-white cursor-pointer font-semibold rounded-xl' onClick={() => navigate(`/quiz/${attempt?.quizId}`)}>
                  Re-Attempt
                </button>
              </div>
            ))
          }
          {
            updatedAttempts.length == 0 && <p>You didn't attempt any quiz, try it today!</p>
          }
        </div>
      </div>
    </div>
  )
}

export default MyAttempts