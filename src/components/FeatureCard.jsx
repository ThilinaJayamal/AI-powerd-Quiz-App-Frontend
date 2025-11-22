import React from 'react'

function FeatureCard({ icon, title, description }) {
    return (
        <div className=' bg-white border border-blue-500/30 rounded-2xl p-4'>
            <div className='size-14 flex justify-center items-center bg-linear-to-br from-purple-500 to-blue-500 rounded-md text-white mb-4'>
                {icon}
            </div>
            <h3 className='text-xl font-bold mb-2'>{title}</h3>
            <p className='text-sm text-gray-500'>{description}</p>
        </div>
    )
}

export default FeatureCard