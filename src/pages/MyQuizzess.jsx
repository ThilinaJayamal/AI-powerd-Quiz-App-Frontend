import React, { useEffect } from 'react'
import MyQuizDisplay from '../components/QuizDisplay'
import { useQuizStore } from '../store/quizStore'

function MyQuizzess() {
    const { myQuizzess, loadMyQuizzes } = useQuizStore();

    console.log(myQuizzess)
    useEffect(() => {
        loadMyQuizzes();
    }, [])

    return (
        <div className='pt-20 bg-blue-50'>
            <div className='max-w-6xl mx-auto py-12 min-h-screen px-4 xl:px-0'>
                <h1 className='text-4xl font-bold'>My Quizzes</h1>
                <p className='text-gray-700 text-lg mt-2'>Explore your collection of quizzes and test your knowledge</p>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-12">
                    {
                        myQuizzess?.map((quiz, index) => (
                            <MyQuizDisplay quiz={quiz} key={index} />
                        ))
                    }
                    {
                        myQuizzess.length == 0 && <p>You didn't create any quiz, try it today!</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default MyQuizzess