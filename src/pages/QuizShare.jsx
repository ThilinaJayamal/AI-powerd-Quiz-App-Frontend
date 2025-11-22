import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuizStore } from '../store/quizStore';
import { Trash } from 'lucide-react';

function QuizShare() {
    const { id } = useParams();
    const { getListOfShareQuiz, sharedQuizDetails, deleteShare, shareQuiz } = useQuizStore();
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (id) {
            getListOfShareQuiz(id);
        }
    }, [id])

    return (
        <div className='pt-20 xl:px-0 px-4 bg-blue-50'>
            <div className='max-w-xl mx-auto min-h-screen '>
                <div className='mt-12'>
                    <h1 className='text-4xl font-semibold'>Share Quiz</h1>
                    <p className='text-lg text-gray-500 mt-2'>Share, Do, Improve Your Knowledge like a master</p>
                </div>

                <div className='mt-6 bg-white p-6 rounded-2xl border border-gray-500/40'>
                    <div className='text-base font-normal mt-6 space-y-2'>
                        <p>Enter Email ID of your friend</p>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-2 rounded-md w-full border border-gray-500/40' />
                    </div>
                    <button onClick={() => shareQuiz(id, email)}
                        className='px-8 py-2 bg-purple-500 hover:bg-purple-600 cursor-pointer text-lg rounded-xl text-white mt-6'
                    >
                        Share
                    </button>
                </div>

                <div className='space-y-3 mt-6'>
                    {
                        sharedQuizDetails.map((share, index) => (
                            <div key={index} className='flex justify-between items-center bg-white p-4 rounded-2xl hover:shadow-md shadow-blue-100'>
                                <div className='space-y-1'>
                                    <h1 className='font-semibold text-gray-700'>{share.email}</h1>
                                    <p className='text-xs text-gray-600'>Shared At {share.sharedAt.substring(0, 10)}</p>
                                </div>
                                <div onClick={() => deleteShare(id, share.email)}
                                    className='text-white size-10 flex items-center justify-center
                                 bg-red-600 hover:bg-red-700 rounded-md cursor-pointer'>
                                    <Trash />
                                </div>
                            </div>
                        ))
                    }

                    {
                        sharedQuizDetails.length == 0 && <p>You didn't share this quiz with anyone, share it today!</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default QuizShare