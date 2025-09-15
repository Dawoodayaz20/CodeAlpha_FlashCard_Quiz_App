type QuizCard = {
    question: string, 
    answer: string
}

type QuizContextType = {
    quizState: QuizCard[];
    setQuizState: React.Dispatch<React.SetStateAction<QuizCard[]>>;
}