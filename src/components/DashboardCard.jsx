import { BookOpenText } from 'lucide-react'
import React from 'react'

function DashboardCard({title,value,style="",icon}) {
    return (
        <div className='bg-white backdrop-blur p-6 rounded-2xl border border-gray-500/20 hover:shadow-md shadow-blue-100'>
            <div className='flex justify-between items-center'>
                <p className='text-gray-800'>{title}</p>
                <div className={`size-10 flex items-center justify-center text-white rounded-xl ${style}`}>
                   {icon}
                </div>
            </div>
            <h2 className='text-3xl font-bold mt-4 text-gray-800'>{value}</h2>
        </div>
    )
}

export default DashboardCard