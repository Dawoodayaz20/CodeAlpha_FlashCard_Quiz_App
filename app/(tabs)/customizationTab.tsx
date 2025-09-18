import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from 'react-native-paper';
import { QuizContext } from "../Components/QuizContext";

export default function CustomizationTab(){
    const QuizData = useContext(QuizContext);
    if (!QuizData) {
        throw new Error("CustomizationTab must be used inside QuizContextProvider");
    }
    const { quizState, setQuizState } = QuizData;

    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");

    function addCard(){
        if(newQuestion.trim() === "" || newAnswer.trim() === "") return;

        try
        {
            setQuizState([
            ...quizState, 
            { question: newQuestion, answer: newAnswer}
        ]);
        console.log("Your Quiz card was successfully saved!")
        }
        catch(err){
            console.log("An error was occured while saving your Quiz card", err)
        }

        setNewQuestion("")
        setNewAnswer("")
    }

    return(
        <View className="flex-1 bg-gray-900 p-6">
            <Text className="text-white text-2xl font-bold mb-6 text-center">
        Customize Your Quiz
      </Text>

      <Text className="text-gray-300 text-center mb-4">
        Add your own questions and answers to personalize the quiz.
      </Text> 
            <View className="gap-4">
                <TextInput
                mode="outlined"
                label="Add Question"
                value={newQuestion}
                onChangeText={setNewQuestion}
                className="text-white px-4 py-3 rounded-xl"
                />
                <TextInput 
                mode="outlined"
                label="Add Answer"
                value={newAnswer}
                onChangeText={setNewAnswer}
                className=" text-white px-4 py-3 rounded-xl"
                />
            <View className="justify-center items-center flex-1">
           <TouchableOpacity
            onPress={addCard}
            className="bg-blue-500 py-3 rounded-xl shadow-md w-40 justify-center items-center mt-10"
            >
                <Text className="text-center ">Add Quiz Card</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
