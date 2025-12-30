import React from 'react'
import LoadingSpinner from './LoadingSpinner'

function PageLoader({ text = 'Loading...' }) {
    return (
        <div className='w-full min-h-screen flex gap-3 flex-col items-center justify-center bg-linear-to-br from-blue-50 to-purple-50'>
            <div className='text-center space-y-4'>
                <h1 className='text-5xl font-bold text-gray-900'>Quiz<span className='text-blue-500'>Master</span></h1>
                <LoadingSpinner size="large" text={text} />
            </div>
        </div>
    )
}

export default PageLoader
