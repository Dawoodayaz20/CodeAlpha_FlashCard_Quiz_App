import { Text, View } from "react-native";
import FlashCardComp from "./Components/flashcard.component";
import './global.css'

export default function Index() {
  return (
    <View
      className="bg-slate-900 mt-10"
    >
      <FlashCardComp />
    </View>
  );
}
