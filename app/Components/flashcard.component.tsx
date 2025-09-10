import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function FlashCardComp () {
    const [card, setCard]  = useState<boolean>(true)
    
    function prevState () {
        return setCard(!card)
    }

    return (
        <View>
            <TouchableOpacity onPress={(() => (
                prevState()
            ))}>
            <Text>
                {card 
                    ? 
                "This is the flash Card Question"
                    :
                "This is the flash Card Answer!"}
            </Text>
            </TouchableOpacity>
        </View>
    )
}
