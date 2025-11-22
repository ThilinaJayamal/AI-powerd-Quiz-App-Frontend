import { Sparkles, Upload } from 'lucide-react'
import React, { useRef, useState } from 'react'
import GeneratedQuestionCard from '../components/GeneratedQuestionCard'
import { useQuizStore } from "../store/quizStore"

function QuizGeneratePDF() {

    const [file, setFile] = useState(null);
    const [size, setSize] = useState(1);
    const [topic, setTopic] = useState("");
    const fileRef = useRef(null);

    const { isSaving, isGenerating, questions, generateQuizFromPdf, saveQuiz } = useQuizStore();

    const handleFileChange = (e) => {
        fileRef.current.click()
        const uploaded = e.target.files[0];
        if (!uploaded) return;

        // Only PDF
        if (uploaded.type !== "application/pdf") {
            alert("Please upload a PDF file");
            return;
        }

        setFile(uploaded);
    };

    const handleGenerate = () => {
        if (!file) {
            alert("Please upload a PDF file first.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("size", size);

        generateQuizFromPdf(formData);
    };


    return (
        <div className='bg-blue-50 pb-24 pt-20'>
            <div className='pt-12 max-w-4xl xl:mx-auto mx-4'>
                <h1 className='text-4xl font-semibold mb-1'>Generate Quiz From PDF</h1>
                <p className='text-xl text-gray-500'>Upload a PDF and generate quiz questions using AI</p>

                <div className='mt-12 bg-white border border-gray-500/60 p-4 rounded-2xl'>
                    <h2 className='text-2xl font-semibold'>Quiz Details</h2>
                    <p className='text-base text-gray-500'>Upload your PDF & choose number of questions</p>

                    <div className='space-y-3 mt-6'>
                        <div className='space-y-1.5'>
                            <p className='text-base'>Upload Your PDF file</p>
                            <div onClick={handleFileChange}
                                className='text-gray-500 h-34 w-full flex flex-col items-center justify-center border-4 border-dashed border-gray-500/40 rounded-2xl'>
                                {
                                    file ?
                                        (
                                            <p>{file?.name}</p>
                                        )
                                        :
                                        (
                                            <div className='flex items-center justify-center flex-col gap-4'>
                                                <p>Click here to upload a PDF file</p>
                                                <Upload size={32} />
                                            </div>
                                        )
                                }
                            </div>
                            <input
                                type='file'
                                ref={fileRef}
                                accept='application/pdf'
                                onChange={handleFileChange}
                                className='hidden'
                            />
                        </div>

                        <div className='space-y-1.5'>
                            <p className='text-base'>Number Of Questions</p>
                            <input
                                type="number"
                                value={size}
                                onChange={(e) => setSize(Number(e.target.value))}
                                min={1}
                                max={50}
                                className='px-2 py-2 border border-gray-500/40 rounded-2xl w-42'
                            />
                        </div>

                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className='px-6 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-lg rounded-xl text-white mt-6'
                    >
                        <Sparkles className='inline mr-4' size={18} />
                        {isGenerating ? "Generating..." : "Generate Quiz"}
                    </button>
                </div>
            </div>

            {questions.map((question, index) => (
                <GeneratedQuestionCard
                    key={index}
                    index={index}
                    question={question.question}
                    answer={question.answer}
                    option1={question.option1}
                    option2={question.option2}
                    option3={question.option3}
                    option4={question.option4}
                    option5={question.option5}
                />
            ))}

            {questions.length > 0 && (
                <div className='max-w-4xl xl:mx-auto mx-4 font-semibold p-4 bg-white rounded-2xl mt-8 border border-gray-500/40'>
                    <p>AI can make mistakes, so review before saving.</p>

                    <div className='text-base font-normal mt-6 space-y-2'>
                        <p>Enter Topic for Your Quiz</p>
                        <input type="text" onChange={(e) => setTopic(e.target.value)}
                            className='p-2 rounded-md w-full border border-gray-500/40' />
                    </div>
                    <button
                        onClick={()=>saveQuiz(topic)}
                        disabled={isSaving}
                        className='px-8 py-2 bg-purple-500 hover:bg-purple-600 cursor-pointer text-lg rounded-xl text-white mt-6'
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
}

export default QuizGeneratePDF;
