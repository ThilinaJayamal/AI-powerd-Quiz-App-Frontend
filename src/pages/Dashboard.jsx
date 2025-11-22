import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DashboardCard from '../components/DashboardCard'
import { BookOpenCheckIcon, BookOpenText, Share2, Trophy } from 'lucide-react'
import DashboardBrowseCard from '../components/DashboardBrowseCard'
import { useQuizStore } from '../store/quizStore'
import {useAuthStore} from '../store/authStore'

function Dashboard() {
    const { loadAnalytics, analytics } = useQuizStore();
    const {user} = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        loadAnalytics();
    }, [])

    return (
        <div className='pt-20 bg-blue-50 min-h-screen'>

            <div className='max-w-6xl mx-auto mt-12 px-4 xl:px-0 pb-12'>
                <div className='flex justify-between items-center gap-4 flex-wrap'>
                    <div>
                        <h1 className='text-4xl font-bold mb-2 text-gray-800'>Dashboard</h1>
                        <p className='text-lg text-gray-800'>Hi {user?.name}, Welcome back! Here's your overview.</p>
                    </div>

                    <div className='flex items-center justify-center gap-6'>
                        <Link to={"/generate"}>
                            <button className="cursor-pointer px-6 py-2 rounded-full text-white 
                        text-base bg-blue-500 hover:bg-blue-600 transition-colors duration-500">Generate Quiz</button>
                        </Link>
                        <Link to={"/generate-pdf"}>
                            <button className="cursor-pointer px-6 py-2 rounded-full text-white 
                        text-base bg-blue-500 hover:bg-blue-600 transition-colors duration-500">Generate Quiz Based on PDF</button>
                        </Link>
                    </div>

                </div>

                <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-12 '>
                    <DashboardCard icon={<BookOpenText size={20} />} value={analytics?.quizzesCreated || 0}
                        title={"Quizess Created"} style={"bg-linear-to-bl from-blue-500 to-green-500"} />

                    <DashboardCard icon={<BookOpenCheckIcon size={20} />} value={analytics?.quizzesAttempted || 0}
                        title={"Quizzes Attempted"} style={"bg-linear-to-bl from-pink-500 to-purple-500"} />

                    <DashboardCard icon={<Trophy size={20} />} value={(Math.round(analytics?.averageScore) || 0) + "%"}
                        title={"Average Score"} style={"bg-linear-to-bl from-green-500 to-green-300"} />

                    <DashboardCard icon={<Share2 size={20} />} value={analytics?.sharedQuizzes || 0}
                        title={"Total Active Shared"} style={"bg-linear-to-bl from-yellow-500 to-orange-500"} />
                </div>


                <div className='grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                    <DashboardBrowseCard onClick={() => navigate("/my-quizzes")}
                        title={"My Quizzes"} description={"View and manage your created quizzes"} btnTitle={"View All"} />

                    <DashboardBrowseCard onClick={() => navigate("/my-attempts")}
                        title={"My Attempts"} description={"Explore your quiz attempts"} btnTitle={"Browse"} />

                    <DashboardBrowseCard onClick={() => navigate("/shared")}
                        title={"Shared With Me"} description={"Quizzes shared by other users"} btnTitle={"View Shared"} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard