import React, { createContext, useContext, useState, ReactNode} from "react";

export const QuizContext = createContext<QuizContextType | null>(null)

const QuizContextProvider = ({ children } : {children:ReactNode}) => {
    const [ quizState, setQuizState ] = useState<QuizCard[]>([
        {question: "First Question", answer: "First Answer"}
    ])

    return(
        <QuizContext.Provider value={{quizState, setQuizState}}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider;