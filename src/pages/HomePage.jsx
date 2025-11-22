import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import { Binoculars, Brain, Sparkles, Users, Zap } from "lucide-react";

export default function HeroPage() {
  const platformFeatures = [
    {
      icon: <Brain size={28} />,
      title: "Smart Quiz Creation",
      description: "Create engaging quizzes quickly using an intuitive builder."
    },
    {
      icon: <Zap size={28} />,
      title: "Instant Results",
      description: "Receive real-time feedback and detailed performance analytics."
    },
    {
      icon: <Users size={28} />,
      title: "Share & Collaborate",
      description: "Share quizzes with friends or make them public for broader access."
    },
    {
      icon: <Binoculars size={28} />,
      title: "Track Progress",
      description: "Monitor your learning journey with comprehensive statistics."
    }
  ];

  return (
    <div className="bg-gray-50 pt-20">
      <div className="min-h-[calc(100vh-80px)] text-gray-500 flex flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 border border-blue-500/30 rounded-full bg-blue-100/15 backdrop-blur-md px-4 p-1.5 text-sm text-blue-500 max-w-full">
          <Sparkles size={16} />
          <p>Modern Quiz Platform</p>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-gray-800">
          Create, Share, and Master <span className="text-blue-500">Interactive Quizzes</span>
        </h1>
        <p className="text-xl max-w-xl text-center mt-6 px-4">
          Build engaging quizzes, test your knowledge, and track your progress with our beautiful and intuitive platform.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link to={"/login"}>
            <button className="cursor-pointer px-7 py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Get Started Now
            </button>
          </Link>
          <button className="group px-7 py-2.5 flex items-center gap-2 font-medium">
            Learn more
            <svg
              className="group-hover:translate-x-1 transition pt-0.5"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5h10.182m-4-3.5 4 3.5-4 3.5"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-linear-to-br from-blue-100 to-blue-50 py-24">
        <div className="text-center px-4 xl:px-0">
          <h2 className="text-4xl font-semibold mb-2">Everything you need to succeed</h2>
          <p className="text-xl text-gray-500">Powerful features designed to make learning and creating quizzes effortless and fun.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12 px-4 xl:px-0">
          {
            platformFeatures.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} description={feature.description} title={feature.title} />
            ))
          }
        </div>
      </div>

      <div className="bg-white py-24 px-4 xl:px-0">
        <div className="rounded-2xl max-w-6xl mx-auto py-12 bg-linear-to-bl from-blue-100 to-purple-100">
          <div className="px-4 text-center">
            <h2 className="font-semibold text-4xl mb-4">Ready to start your learning journey?</h2>
            <p className="text-xl text-gray-500 mb-6">Join thousands of users already creating and taking quizzes on Quiz?Master.</p>
            <Link to={"/login"}>
              <button className="cursor-pointer px-6 py-2 rounded-full text-white 
            text-lg bg-linear-to-tr from-blue-500 to-purple-500
             hover:from-purple-500 hover:to-blue-500 transition-colors duration-500">
                Create Your Free Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
