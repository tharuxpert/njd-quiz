import { View, Text, StyleSheet } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useState } from "react";

export default function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } =
    useQuizContext();
  const [time, setTime] = useState(20);

  useEffect(() => {
    // start count down
    setTime(20);
    const interval = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [question]);

  useEffect(() => {
    if (time <= 0 && question) {
     onNext();
   }
  },[time])

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>
            Question {questionIndex + 1}/{totalQuestions}
          </Text>
        </View>

        {/* Body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>{time} sec</Text>
          </View>
        ) : (
          <Card title="Well done">
            <Text>
              Correct answers: {score}/{totalQuestions}
            </Text>
            <Text>Best score: {bestScore}</Text>
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
