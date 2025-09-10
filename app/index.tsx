import { Text, View } from "react-native";
import FlashCardComp from "./Components/flashcard.component";
import './global.css'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlashCardComp />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
