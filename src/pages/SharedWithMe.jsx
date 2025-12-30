import React, { useEffect } from 'react'
import MyQuizDisplay from '../components/QuizDisplay'
import { useQuizStore } from '../store/quizStore'
import PageLoader from '../components/PageLoader'

function SharedWithMe() {
  const { getQuizzesSharedWithMe, sharedWithMeQuizzes, isLoading } = useQuizStore();

  useEffect(() => {
    getQuizzesSharedWithMe();
  }, [])

  if (isLoading) {
    return <PageLoader text="Loading shared quizzes..." />
  }

  return (
    <div className='pt-20 bg-blue-50'>
      <div className='max-w-6xl mx-auto py-12 min-h-screen px-4 xl:px-0'>
        <h1 className='text-4xl font-bold'>My Quizzes</h1>
        <p className='text-gray-700 text-lg mt-2'>Explore your collection of quizzes and test your knowledge</p>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-12">
          {
            sharedWithMeQuizzes?.map((quiz, index) => (
              <MyQuizDisplay quiz={quiz} key={index} shared={false}/>
            ))
          }
          {
            sharedWithMeQuizzes.length == 0 && <p>Sorry, you didn't have any quizzes shared with you.</p>
          }
        </div>
      </div>
    </div>
  )
}

export default SharedWithMe