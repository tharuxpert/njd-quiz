import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QuizScreen from "./src/app/QuizScreen";
import QuizProvider from "./src/providers/QuizProvider";

export default function App() {
  return (
    <>
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>
      <StatusBar style="auto" />
    </>
  );
}
