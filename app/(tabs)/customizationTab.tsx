import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from 'react-native-paper';
import { QuizContext } from "../Components/QuizContext";

export default function CustomizationTab(){
    const QuizData = useContext(QuizContext);
    if (!QuizData) {
        throw new Error("CustomizationTab must be used inside QuizContextProvider");
    }
    const { quizState, setQuizState } = QuizData;

    function addCard(newQ: string, newAns: string){
        setQuizState([...quizState, { question: newQ, answer: newAns}
        ]);
    }
    

    return(
        <View>
            <Text>Customize your app by adding new questions and answers for quiz.</Text> 
            <View>
                <TextInput className="w-90 p-12 border-gray-600 mt-5"
                label="Add Question"
                value=""
                />
                <TextInput className="w-90 p-12 border-gray-600 mt-5"
                label="Add Answer"
                value=""
                />
           <TouchableOpacity
            onPress={(() => addCard)}
            className="bg-blue-500 px-6 py-3 rounded-xl shadow-md"
            >
                <Text>Add New Quiz Card</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
