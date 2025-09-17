import { SafeAreaView, ScrollView, Text, View } from "react-native";
import FlashCardComp from "../Components/flashcard.component";
import '../global.css';

export default function Index() {
  return (
    <SafeAreaView className="bg-slate-900 h-full">
    <ScrollView>
    <View>
        <Text className="mt-20 mb-10 text-white font-bold text-center">Click on arrows to move through questions</Text>
      <FlashCardComp />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
