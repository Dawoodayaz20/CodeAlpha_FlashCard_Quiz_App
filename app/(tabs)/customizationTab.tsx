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
    
    console.log(quizState)

    return(
        <View>
            <Text>Customize your app by adding new questions and answers for quiz.</Text> 
            <View className="gap-4">
                <TextInput
                mode="outlined"
                label="Add Question"
                value={newQuestion}
                onChangeText={setNewQuestion}
                />
                <TextInput 
                mode="outlined"
                label="Add Answer"
                value={newAnswer}
                onChangeText={setNewAnswer}
                />
           <TouchableOpacity
            onPress={addCard}
            className="bg-blue-500 px-6 py-3 rounded-xl shadow-md"
            >
                <Text>Add New Quiz Card</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
