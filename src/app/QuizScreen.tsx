import { View, Text, StyleSheet, Pressable } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";

import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function QuizScreen() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const question = questions[questionIndex];

  const onNext = () => {
    setQuestionIndex(questionIndex+1)
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* Body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>20 sec</Text>
          </View>
        ) : (
          <Card title="Well done">
            <Text>Correct answers: 3/5</Text>
            <Text>Best score: 10</Text>
          </Card>
        )}

        {/* Footer */}
        <CustomButton
          title="Next"
          onPress={onNext}
          onLongPress={() => console.warn("Custom button long pressed")}
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FDFDF4",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    color: "#005055",
    fontWeight: "bold",
  },
});
