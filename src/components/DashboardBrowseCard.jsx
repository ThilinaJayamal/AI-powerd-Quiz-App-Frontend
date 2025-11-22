import React from 'react'

function DashboardBrowseCard({ title, description, btnTitle,onClick }) {
    return (
        <div className='bg-white rounded-2xl border border-gray-500/20 p-6 hover:shadow-md shadow-blue-100'>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='mt-2 text-sm text-gray-500'>{description}</p>
            <button className="hover:bg-purple-500 hover:text-white cursor-pointer w-full 
            py-2 rounded-xl border border-gray-500/20 bg-gray-50 mt-4" onClick={onClick}>
                {btnTitle}
            </button>
        </div>
    )
}

export default DashboardBrowseCard