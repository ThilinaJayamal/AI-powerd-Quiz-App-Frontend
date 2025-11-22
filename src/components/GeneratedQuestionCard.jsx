import React from 'react'

function GeneratedQuestionCard(
    {
        question,
        answer,
        option1,
        option2,
        option3,
        option4,
        option5,
        index
    }) {
    return (
        <div className='max-w-4xl mx-auto mt-12'>
            <div className='space-y-8 bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100'>
                {/* Question Section */}
                <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
                    <p className='text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide'>{index+1}{". "}Question</p>
                    <div className='p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500'>
                        <h1 className='text-lg font-medium text-gray-800 leading-relaxed'>
                            {question}
                        </h1>
                    </div>
                </div>

                {/* Options Section */}
                <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
                    <p className='text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide'>Options</p>
                    <div className='space-y-3'>
                        {[option1,option2,option3,option4,option5].map((option, index) => (
                            <div
                                key={index}
                                className='p-4 border border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-25 transition-all duration-200 cursor-pointer group'
                            >
                                <div className='flex items-center space-x-3'>
                                    <div className='w-6 h-6 rounded-full border-2 border-gray-400 group-hover:border-blue-500 flex items-center justify-center'>
                                        <span className='text-xs font-medium text-gray-600 group-hover:text-blue-600'>
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                    </div>
                                    <p className='text-gray-700 group-hover:text-gray-900'>{option}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Correct Answer Section
                <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
                    <p className='text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide'>Correct Answer</p>
                    <div className='p-4 bg-green-50 rounded-lg border-l-4 border-green-500 flex items-center space-x-3'>
                        <div className='w-6 h-6 rounded-full bg-green-500 flex items-center justify-center'>
                            <svg className='w-3 h-3 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
                            </svg>
                        </div>
                        <p className='text-green-700 font-medium'>
                            {answer}
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default GeneratedQuestionCard