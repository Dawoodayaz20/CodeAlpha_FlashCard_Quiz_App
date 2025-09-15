import React, { useContext } from "react";
import { View, Text } from "react-native";
import { TextInput } from 'react-native-paper'
import { QuizContext } from "./QuizContext";

export default function CustomizationTab(){
    const QuizData = useContext(QuizContext);

    // function addCard(newQ: string, newAns: string){
    //     setQuizData([...quizData, { Question: newQ, Answer: newAns}
    //     ]);
    // }

    return(
        <View>
            <Text>Customize your app by adding new questions and answers for quiz.</Text> 
            <View>
                <TextInput className="w-90 p-12 border-gray-600 mt-5"
                label="Add Question"
                value=""
                />
            </View>
        </View>
    )
}