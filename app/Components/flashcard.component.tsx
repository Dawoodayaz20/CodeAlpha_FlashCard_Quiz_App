import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View, TextInput, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { QuizContext } from "./QuizContext";

export default function FlashCardComp () {
    const QuizData = useContext(QuizContext);
    if (!QuizData) {
        throw new Error("CustomizationTab must be used inside QuizContextProvider");
    }
    const { quizState, setQuizState } = QuizData;
    const [Questate, setQueState]  = useState<boolean>(true);
    const [QuesNum, setQuesNum] = useState<number>(0);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editQue, setEditQue] = useState<string>("");
    const [editAns, setEditAns] = useState<string>("");

    const card = quizState[QuesNum]; //This is the Quiz Card 
    const quizLength = quizState.length //This is the number of flashcards

    function toggleEdit(){
        if(!isEditing){
            setEditQue(card?.question || "");
            setEditAns(card?.answer || "");
        }
        setIsEditing(!isEditing);
    }

    function saveEditCard(){
        const updatedCard = [...quizState];
        updatedCard[QuesNum] = { question: editQue, answer: editAns };
        setQuizState(updatedCard);
        setIsEditing(false);
    }

    function deleteCard(){
        const updated = quizState.filter((card, i)=> i!==QuesNum)
        setQuizState(updated);
        setQuesNum(0);
    }

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

    return (
        <View className="flex-1 bg-slate-900 items-center justify-center p-2">
            <View 
            className="bg-white w-96 h-48 rounded-2xl shadow-lg items-center justify-center mb-6">
            <View className="flex-row justify-items-stretch">
            <TouchableOpacity onPress={prevQuestion}><Text className="size-5 text-blue-500 font-extrabold text-2xl mr-10">{"<"}</Text></TouchableOpacity>
            { isEditing ? (
            <View>
            <TextInput
              placeholder="Edit Question"
              value={editQue}
              onChangeText={setEditQue}
              className="border border-gray-400 rounded-lg p-2 mb-3"
            />
            <TextInput
              placeholder="Edit Answer"
              value={editAns}
              onChangeText={setEditAns}
              className="border border-gray-400 rounded-lg p-2"
            />
          </View>
            ):
            (
                <View className="flex-row">
                   
                <Text className="text-xl font-semibold text-slate-800 text-center">
                {quizState.length > 0 && quizState[QuesNum]
                ? ( Questate 
                    ? quizState[QuesNum].question 
                    : quizState[QuesNum].answer
                   )
                : "No Quiz Questions Added"}
                </Text>
                <TouchableOpacity onPress={newQuestion}><Text className="size-5 text-blue-500 last:font-extrabold text-2xl ml-10">{">"}</Text></TouchableOpacity>
                </View>
            ) }
            </View>
            </View>
            <View className="flex-row gap-4">
            {!isEditing ? 
            (
            <TouchableOpacity
                onPress={toggleEdit}
                className="bg-blue-500 px-4 py-3 rounded-xl shadow-md"
            >
            <Text className="text-white font-bold text-lg">Edit</Text>
            </TouchableOpacity>
            ) 
            :
            (
            <TouchableOpacity
                onPress={saveEditCard}
                className="bg-blue-500 px-4 py-3 rounded-xl shadow-md"
                > 
            <Text className="text-white font-bold text-lg">Save</Text>
            </TouchableOpacity>
            )
            }
            
            <TouchableOpacity
                onPress={(() => setQueState(!Questate))}
                className="bg-red-500 px-2 py-3 rounded-xl shadow-md"
                >
            <Text className="text-white font-bold text-lg">Show Answer</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={deleteCard}
                className="bg-blue-500 px-4 py-3 rounded-xl shadow-md"
                >
            <Text className="text-white font-bold text-lg">Delete</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
