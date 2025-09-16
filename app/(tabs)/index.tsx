import { SafeAreaView, ScrollView, Text, View } from "react-native";
import FlashCardComp from "../Components/flashcard.component";
import QuizContextProvider from "../Components/QuizContext";
import '../global.css';

export default function Index() {
  return (
    <SafeAreaView>
    <ScrollView>
    <View
      className="bg-slate-900 h-full">
        <Text className="mt-20 mb-10 text-white font-bold text-center">Swipe left and Right to move through questions</Text>
      <FlashCardComp />
      <Text className="mt-10 mb-10 text-white font-bold text-center">Add, Edit and Delete more questions and answers to this Flash Card Quiz</Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
