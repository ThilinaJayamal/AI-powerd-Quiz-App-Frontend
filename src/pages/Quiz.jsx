import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuizStore } from '../store/quizStore';
import QuizOption from '../components/QuizOption';
import { MoveLeft, MoveRight } from 'lucide-react';
import { formatTime } from '../utils/timeFormatter';
import ResultCard from '../components/ResultCard';

function Quiz() {
    const { id } = useParams();
    const { loadQuizById, quizById, setAnswers, attemptQuiz, result } = useQuizStore();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [time, setTime] = useState(0);
    const [submitted, setSubmitted] = useState(false); // Prevent double submit
    const intervalRef = useRef(null);

    const navigate = useNavigate();

    const question = quizById && quizById?.questions[currentIndex];
    const progress = quizById ? ((currentIndex + 1) / quizById.questions.length * 100) : 0;

    // Load quiz on mount
    useEffect(() => {
        if (id) {
            loadQuizById(id);
        }
    }, [id]);

    // Initialize timer once quiz is loaded
    useEffect(() => {
        if (!quizById?.questions) return;

        setTime(Math.ceil(quizById.questions.length * 1.2 * 60)); // set total time in seconds

        intervalRef.current = setInterval(() => {
            setTime(prev => {
                if (prev <= 1) {
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [quizById]);

    const handleNext = () => {
        if (currentIndex < quizById.questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

    const handleSubmit = () => {
        if (!submitted && id) {
            setSubmitted(true);
            clearInterval(intervalRef.current);
            attemptQuiz(id);
        }
    }

    if(!quizById){
        return(
            <div className='text-red-600 min-h-screen p-20 flex flex-col gap-3 justify-center items-center'>
                Sorry, you don't have access to this resource.
                <button className='text-white cursor-pointer px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600' onClick={()=>navigate("/dashboard")}>Dashboard</button>
            </div>
        )
    }

    return (
        <div className='pt-20 bg-blue-50 min-h-screen'>
            <div className='max-w-3xl mx-auto xl:px-0 px-4 py-12'>
                {/* Quiz Header */}
                <div className='bg-white w-full p-6 rounded-2xl space-y-2'>
                    <div className='flex justify-between items-center gap-4'>
                        <h1 className='text-2xl font-semibold'>{quizById?.title}</h1>
                        <h1 className='text-2xl font-semibold text-gray-500'>{formatTime(time)}</h1>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <p className='text-gray-500'>Questions {currentIndex + 1} of {quizById?.questions.length}</p>
                        <p className='text-gray-500'>{Math.round(progress)}% Complete</p>
                    </div>
                    <div className='w-full bg-gray-100 rounded-full h-2'>
                        <div className='bg-blue-500 rounded-full h-2' style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                {/* Question Card */}
                <div className='bg-white w-full p-6 rounded-2xl mt-6'>
                    <h1 className='text-xl font-semibold'>{question.question}</h1>
                    <div className='space-y-2 mt-6'>
                        {question?.options?.map((option, index) => (
                            <QuizOption
                                onChange={setAnswers}
                                option={option}
                                key={index}
                                name={question?.id}
                            />
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className='flex justify-between items-center gap-4 mt-6'>
                        <button
                            onClick={handlePrevious}
                            className={`px-6 py-2 bg-gray-100 font-semibold 
                        rounded-xl ${currentIndex > 0 ? "hover:bg-purple-500 hover:text-white cursor-pointer" : "cursor-not-allowed"}`}
                        >
                            <MoveLeft className='size-5 mr-1 inline' /> Previous
                        </button>

                        {currentIndex !== quizById?.questions?.length - 1 && (
                            <button
                                onClick={handleNext}
                                className='px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-semibold rounded-xl'
                            >
                                Next <MoveRight className='size-5 ml-1 inline' />
                            </button>
                        )}

                        {currentIndex === quizById?.questions?.length - 1 && (
                            <button
                                onClick={handleSubmit}
                                className='px-6 py-2 bg-green-500 hover:bg-green-600 text-white cursor-pointer font-semibold rounded-xl'
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </div>

                {/* Question Navigator */}
                <div className='flex justify-start items-center flex-wrap gap-4 mt-6 p-6 bg-white rounded-2xl'>
                    {quizById?.questions?.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex items-center justify-center size-8 border
                        border-gray-500/40 rounded-md cursor-pointer 
                        ${index === currentIndex ? "bg-blue-600 text-white hover:bg-blue-500" : "hover:bg-gray-100"}`}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>

            {
                (result || result == 0) &&
                (
                    <ResultCard />
                )
            }
        </div>
    )

}

export default Quiz