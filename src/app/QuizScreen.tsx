import { View, Text, StyleSheet, Pressable } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";

import questions from "../questions";

const question = questions[0];

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* Body */}
        <View>
          <QuestionCard question={question} />
          <Text style={styles.time}>20 sec</Text>
        </View>

        {/* Footer */}
        <Pressable
          style={styles.button}
          onPress={() => console.log("Pressed")}
          onLongPress={() => console.log("Long pressed")}
        >
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome6
            name="arrow-right-long"
            size={16}
            color="white"
            style={styles.buttonIcon}
          />
        </Pressable>
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
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right:20
  }
});
