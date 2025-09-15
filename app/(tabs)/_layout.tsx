import React from "react";
import { Stack, Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function TabsLayout() {
  return ( 
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
)
}