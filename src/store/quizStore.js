import { create } from 'zustand'
import { api } from "../lib/api"
import toast from 'react-hot-toast'

export const useQuizStore = create((set, get) => ({
    isSaving: false,
    isGenerating: false,
    isLoading: false,
    questions: [],
    analytics: null,
    myQuizzess: [],
    quizById: null,
    answers: [],
    result: null,
    sharedQuizDetails: [],
    myAttempts: [],
    sharedWithMeQuizzes: [],


    clearResult: () => {
        set({ result: null })
    },

    setAnswers: (e) => {
        const { answers } = get();
        const { name, value } = e.target;
        const filtered = answers.filter((ans) => ans.id != Number(name));
        set({ answers: [...filtered, { id: Number(name), answer: value }] });
    },

    generateQuiz: async (description, size) => {
        try {
            if (!(description?.length > 2)) {
                return toast.error("Please, add a brief description of what this quiz covers")
            }
            set({ isGenerating: true })
            set({ questions: [] })
            const { data } = await api.get(`/question?description=${description}&size=${size}`)
            set({ questions: data })
            set({ isGenerating: false })
            toast.success("Your quiz has been generated successfully")
        } catch (error) {
            console.log(error)
            set({ questions: [] })
            set({ isGenerating: false })
            toast.error(error?.response.data || error?.message)
        }
    },
    saveQuiz: async (title) => {
        const { questions } = get();
        try {
            if (!questions?.length > 0) {
                return toast.error("You need to generate the quiz first");
            }
            if (!(title?.length > 2)) {
                return toast.error("You need add a topic for quiz");
            }
            set({ isSaving: true })
            const { data } = await api.post("/quiz", {
                title: title,
                questions: questions
            });

            toast.success("You have successfully created the quiz");
            set({ isSaving: false })
            set({ questions: [] })
        } catch (error) {
            toast.error(error?.response?.data || "Login failed")
            set({ isSaving: false })
        }
    },

    deleteQuiz: async (id) => {
        try {
            const { data } = await api.delete(`quiz/${id}`);
            const { loadMyQuizzes } = get();
            await loadMyQuizzes();
            toast.success("Successfully deleted")
        } catch (error) {
            set({ analytics: null })
            toast.error(error?.response.data || error?.message)
        }
    },

    generateQuizFromPdf: async (formData) => {
        try {
            set({ isGenerating: true })
            set({ questions: [] })
            const { data } = await api.post("/question/upload", formData)
            set({ questions: data })
            set({ isGenerating: false })
        } catch (error) {
            set({ questions: [] })
            set({ isGenerating: false })
            toast.error(error?.response.data || error?.message)
        }
    },

    loadAnalytics: async () => {
        try {
            const { data } = await api.get("/analytics/summary");
            set({ analytics: data })
        } catch (error) {
            set({ analytics: null })
            toast.error(error?.response.data || error?.message)
        }
    },

    loadMyQuizzes: async () => {
        try {
            set({ isLoading: true })
            const { data } = await api.get("/quiz/all");
            set({ myQuizzess: data, isLoading: false })
        } catch (error) {
            set({ myQuizzess: [], isLoading: false })
            toast.error(error?.response.data || error?.message)
        }
    },

    loadQuizById: async (id) => {
        try {
            set({ isLoading: true, quizById: null })
            const { data } = await api.get(`/quiz/${id}`);
            set({ quizById: data })
            const emptyAnswers = data?.questions?.map((question) => {
                return {
                    id: question.id,
                    answer: ""
                }
            });
            set({ answers: emptyAnswers, isLoading: false });
        } catch (error) {
            set({ quizById: null, isLoading: false })
            toast.error(error?.response.data || error?.message)
        }
    },

    attemptQuiz: async (id) => {
        try {
            const { answers } = get();
            const { data } = await api.post(`/attempt/quiz/${id}`, answers);
            set({ result: Math.round(data?.result) });
            set({ answers: [] })
        } catch (error) {
            set({ answers: [] })
            toast.error(error?.response.data || error?.message)
        }
    },

    getListOfShareQuiz: async (id) => {
        try {
            set({ isLoading: true })
            const { data } = await api.get(`/quiz/share/${id}`);
            set({ sharedQuizDetails: data, isLoading: false })
        } catch (error) {
            set({ sharedQuizDetails: [], isLoading: false })
            toast.error(error?.response.data || error?.message)
        }
    },

    deleteShare: async (id, email) => {
        try {
            const { getListOfShareQuiz } = get();
            const { data } = await api.delete(`/quiz/share/delete?email=${email}&id=${id}`);
            await getListOfShareQuiz(id);
            toast.success("Shared link successfully deleted")
        } catch (error) {
            toast.error(error?.response.data || error?.message)
        }
    },

    shareQuiz: async (id, email) => {
        try {
            console.log(email)
            const { getListOfShareQuiz } = get();
            const { data } = await api.post(`/quiz/share/${id}?email=${email}`);
            console.log(data)
            await getListOfShareQuiz(id);
            toast.success("Shared link successfully created")
        } catch (error) {
            console.log(error)
            toast.error(error?.response.data || error?.message)
        }
    },
    getMyAttempts: async () => {
        try {
            set({ isLoading: true })
            const { data } = await api.get("attempt/quiz/all");
            set({ myAttempts: data, isLoading: false })
        } catch (error) {
            set({ myAttempts: [], isLoading: false })
            toast.error(error?.response.data || error?.message)
        }
    },

    getQuizzesSharedWithMe: async () => {
        try {
            set({ isLoading: true })
            const { data } = await api.get("/quiz/share/all");
            set({ sharedWithMeQuizzes: data, isLoading: false })
        } catch (error) {
            set({ sharedWithMeQuizzes: [], isLoading: false })
            toast.error(error?.response.data || error?.message)
        }
    }

}))