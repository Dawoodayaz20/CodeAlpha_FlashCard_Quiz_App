import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";
import { QuizContext } from "../(tabs)/QuizContext";

export default function FlashCardComp () {
    const QuizData = useContext(QuizContext);
    const [Questate, setQueState]  = useState<boolean>(true)
    const [QuesNum, setQuesNum] = useState<number>(0)
    const [quizData, setQuizData] = useState([
        {Question: "Question 1", Answer: "Answer 1"},
        {Question:"Question 2", Answer: "Answer 2"},
        {Question:"Question 3", Answer: "Answer 3"},
        {Question:"Question 4", Answer: "Answer 4"},
        {Question: "You have finished the Quiz! Click reset to restart 👇", 
        Answer: "You have finished the Quiz! Click reset to restart 👇"}
    ])

    function addCard(newQ: string, newAns: string){
        setQuizData([...quizData, { Question: newQ, Answer: newAns}
        ]);
    }

    const quizLength = QuizData.quizState.length
    console.log(quizLength)

    function newQuestion () {
        if (QuesNum + 1 < quizLength) {
            setQueState(true)
            setQuesNum(QuesNum + 1);
        } else {
        setQuesNum(0);
        }
    }

    function prevQuestion () {
        if (QuesNum > 0) {
            setQueState(true)
            setQuesNum(QuesNum - 1);
        } else {
        setQuesNum(quizLength - 1);
        }
    }

    function prevState () {
        return setQueState(!Questate)
    }
    
    return (
        <View className="flex-1 bg-slate-900 items-center justify-center p-6">
            <TouchableOpacity 
            onPress={prevState}
            className="bg-white w-80 h-48 rounded-2xl shadow-lg items-center justify-center mb-6"
            >
            <Text className="text-xl font-semibold text-slate-800 text-center">
                {QuizData.quizState
                ? ( Questate 
                    ? QuizData.quizState[QuesNum].question 
                    : QuizData.quizState[QuesNum].answer
                   )
                : "No Quiz Questions Added"}
            </Text>
            {/* <Text className="text-xl font-semibold text-slate-800 text-center">{ShowAnswer(QuesNum)}</Text> */}
            </TouchableOpacity>
            <View className="flex-row gap-4">
            <TouchableOpacity
                onPress={newQuestion}
                className="bg-blue-500 px-6 py-3 rounded-xl shadow-md"
                >
            <Text className="text-white font-bold text-lg">Next</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setQuesNum(0)}
                className="bg-red-500 px-6 py-3 rounded-xl shadow-md"
                >
            <Text className="text-white font-bold text-lg">Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={prevQuestion}
                className="bg-blue-500 px-6 py-3 rounded-xl shadow-md"
                >
            <Text className="text-white font-bold text-lg">Previous</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
