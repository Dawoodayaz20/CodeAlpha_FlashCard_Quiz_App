import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import React from "react";
import QuizContextProvider from "../Components/QuizContext";

export default function TabsLayout() {
  return ( 
    <QuizContextProvider>
  <Tabs screenOptions={
    {   
        tabBarStyle:{
          backgroundColor: "",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0
        },   
    }}>
    <Tabs.Screen name="index" options={{
      headerShown:true,
      title: "Home",
      headerTitleAlign:"center",
      tabBarIcon: ({ color, focused }) => (
        <MaterialCommunityIcons 
        name="home" 
        size={12}
        />)
    }} 
    />
    <Tabs.Screen name="customizationTab" options={{
      headerShown:true,
      title: "Customization",
      headerTitleAlign:"center",
      tabBarIcon: ({ color, focused }) => (
        <MaterialCommunityIcons 
        name="cog" 
        size={12}
        />)
    }} 
    />
  </Tabs>
  </QuizContextProvider>
)
}