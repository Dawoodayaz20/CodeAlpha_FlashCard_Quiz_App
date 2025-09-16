import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { QuizContext } from "./QuizContext";

export default function FlashCardComp () {
    const QuizData = useContext(QuizContext);
    if (!QuizData) {
        throw new Error("CustomizationTab must be used inside QuizContextProvider");
    }
    const { quizState, setQuizState } = QuizData;
    const [Questate, setQueState]  = useState<boolean>(true)
    const [QuesNum, setQuesNum] = useState<number>(0)

    const quizLength = quizState.length
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
    
    console.log(quizState)

    return (
        <View className="flex-1 bg-slate-900 items-center justify-center p-6">
            <TouchableOpacity 
            onPress={prevState}
            className="bg-white w-80 h-48 rounded-2xl shadow-lg items-center justify-center mb-6"
            >
            <Text className="text-xl font-semibold text-slate-800 text-center">
                {quizState.length > 0 && quizState[QuesNum]
                ? ( Questate 
                    ? quizState[QuesNum].question 
                    : quizState[QuesNum].answer
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
