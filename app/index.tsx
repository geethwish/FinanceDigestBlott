import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-light h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full ">
          <Link href={"/(auth)/RegisterScreen"} style={{ color: "blue" }}>
            Home
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
