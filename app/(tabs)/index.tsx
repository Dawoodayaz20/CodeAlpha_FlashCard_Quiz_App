import { Text, View, SafeAreaView } from "react-native";
import FlashCardComp from "../Components/flashcard.component";
import QuizContextProvider from "./QuizContext";
import '../global.css'

export default function Index() {
  return (
    <QuizContextProvider>
    <View
      className="bg-slate-900 h-full">
      <FlashCardComp />
    </View>
    </QuizContextProvider>
  );
}
