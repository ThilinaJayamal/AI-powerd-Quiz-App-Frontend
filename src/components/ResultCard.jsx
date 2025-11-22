import React from 'react'
import { useQuizStore } from '../store/quizStore';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ResultCard() {
    const { result, clearResult } = useQuizStore();
    const navigate = useNavigate();
    const tiers = [
        {
            max: 40,
            color: "border-red-500",
            emoji: "🌱",
            title: "Every expert starts small",
            sub: `You scored ${result}%. This is your foundation — keep building!`,
        },
        {
            max: 60,
            color: "border-amber-500",
            emoji: "⚡",
            title: "Momentum is growing",
            sub: `You scored ${result}%. You're charging up — one more push and you'll break through.`,
        },
        {
            max: 80,
            color: "border-blue-500",
            emoji: "🚀",
            title: "You're soaring higher",
            sub: `You scored ${result}%. You're on the launchpad — aim for the stars.`,
        },
        {
            max: 101,
            color: "border-green-500",
            emoji: "🎉",
            title: "Champion mode unlocked!",
            sub: `You scored ${result}%. Keep shining, you're unstoppable.`,
        },
    ];

    const tone = tiers.find((t) => result < t.max) || tiers[0];

    return (
        <div className='xl:p-0 p-4 fixed top-0 left-0 right-0 bottom-0 bg-gray-900/40 flex items-center justify-center pt-20'>
            <div className={`p-6 max-w-xl mac-auto rounded-2xl bg-white relative
                 text-gray-800 text-center space-y-3 border-l-8 ${tone?.color}`}>
                <div className='mt-6'>
                    <h1 className='text-2xl font-semibold mb-2'>{tone?.title}</h1>
                    <p>{tone?.sub}</p>
                </div>
                <p className='text-4xl'>{tone?.emoji}</p>

                <div onClick={() => {
                    clearResult();
                    navigate("/dashboard")
                }}
                    className='absolute top-2 right-2 size-8 border flex items-center 
                justify-center rounded-md hover:bg-gray-100 cursor-pointer'>
                    <X size={20} />
                </div>
            </div>
        </div>
    )
}

export default ResultCard