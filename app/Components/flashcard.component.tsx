import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native";

export default function FlashCardComp () {
    const [quest, setAns]  = useState<boolean>(true)
    const [QuesNum, setQuesNum] = useState<number>(0)
    
    const quizArray : string[] = ["Question 1", "Question 2", "Question 3", "Question 4", "You have finished the Quiz! Click reset to restart 👇"]
    const AnswerArray : string[] = ["Answer 1" , "Answer 2", "Answer 3", "Answer 4", "You have finished the Quiz! Click reset to restart 👇"] 
    const quizLength = quizArray.length

    function newQuestion () {
        if (QuesNum + 1 < quizLength) {
        setQuesNum(QuesNum + 1);
        } else {
        setQuesNum(0);
        }
    }
    
    function prevState () {
        return setAns(!quest)
    }

    return (
        <View className="flex-1 bg-slate-900 items-center justify-center p-6">
            <TouchableOpacity 
            onPress={prevState}
            className="bg-white w-80 h-48 rounded-2xl shadow-lg items-center justify-center mb-6"
            >
            <Text className="text-xl font-semibold text-slate-800 text-center">
                {quest 
                    ? 
                quizArray[QuesNum]
                    :
                AnswerArray[QuesNum]}
            </Text>
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
            </View>
        </View>
    )
}
