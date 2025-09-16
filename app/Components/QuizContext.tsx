import React, { createContext, useContext, useState, ReactNode} from "react";

type QuizCard = {
    question: string, 
    answer: string
};

type QuizContextType = {
    quizState: QuizCard[];
    setQuizState: React.Dispatch<React.SetStateAction<QuizCard[]>>;
};


export const QuizContext = createContext<QuizContextType | null>(null)

const QuizContextProvider = ({ children } : {children:ReactNode}) => {
    const [ quizState, setQuizState ] = useState<QuizCard[]>([])

    return(
        <QuizContext.Provider value={{quizState, setQuizState}}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider;