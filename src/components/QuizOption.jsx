import React, { useRef } from 'react'
import { useQuizStore } from '../store/quizStore';

function QuizOption({ option, name, onChange }) {
    const checkBoxRef = useRef(null);
    const { answers } = useQuizStore();
    const userSelectedAnswer = answers ? answers?.find((answer) => answer.id === name)?.answer : "";
    return (
        <div className='flex items-center justify-start gap-2 hover:bg-gray-50
        border border-gray-500/30 rounded-xl p-3 cursor-pointer hover:border-blue-300/60' onClick={() => checkBoxRef.current.click()}>
            <div className='size-5'>
                <input value={option} onChange={onChange} type="radio" checked={userSelectedAnswer === option}
                    name={name} className='size-5' ref={checkBoxRef} />
            </div>
            <p>{option}</p>
        </div>
    )
}

export default QuizOption