import { Trash, Share2, BookOpenText, Clock2, CirclePlay } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuizStore } from '../store/quizStore'
import ConfirmModal from '../components/ConfirmModal'

function MyQuizDisplay({ quiz, shared = true }) {
    const navigate = useNavigate();
    const { deleteQuiz } = useQuizStore();

    const [openModal, setOpenModal] = useState(false);

    const handleDelete = () => {
        deleteQuiz(quiz?.id);
        setOpenModal(false);
    };

    return (
        <div className='bg-white border border-gray-500/40 rounded-2xl p-6 hover:shadow-md shadow-blue-100'>

            <ConfirmModal
                open={openModal}
                title="Delete Quiz"
                message="Are you sure you want to delete this quiz? This action cannot be undone."
                onCancel={() => setOpenModal(false)}
                onConfirm={handleDelete}
            />

            {
                shared && (
                    <div className='border-b border-gray-500/40 pb-4 relative'>
                        <Share2 className='inline mr-2' />

                        <button
                            onClick={() => navigate(`/share/${quiz?.id}`)}
                            className='border border-gray-500/40 rounded-full font-semibold px-3 py-1 hover:bg-gray-100'
                        >
                            Share With Others
                        </button>

                        <div
                            onClick={() => setOpenModal(true)}
                            className='cursor-pointer absolute top-0 right-0 bg-red-600 rounded-md hover:bg-red-700 p-2 text-white'
                        >
                            <Trash />
                        </div>
                    </div>
                )
            }

            <h1 className='text-xl font-semibold mt-6'>{quiz?.title}</h1>

            <div className='flex justify-between items-center mt-2 text-xs'>
                <p className='bg-purple-500/30 px-4 py-1 rounded-full text-purple-500'>
                    <BookOpenText size={14} className='inline ml-1' /> {quiz?.questions.length} questions
                </p>

                <p className='bg-green-500/30 px-4 py-1 rounded-full text-green-500'>
                    <Clock2 size={14} className='inline ml-1' /> {Math.round(quiz?.questions.length * 1.2)} min
                </p>
            </div>

            <button
                className='w-full py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-xl text-white mt-6'
                onClick={() => navigate(`/quiz/${quiz?.id}`)}
            >
                Start Quiz <CirclePlay size={20} className='inline ml-1' />
            </button>
        </div>
    );
}

export default MyQuizDisplay;
