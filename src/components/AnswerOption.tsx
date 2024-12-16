import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { useQuizContext } from "../providers/QuizProvider";

type AnswerOption = {
  option: string;
};

function AnswerOption({ option }: AnswerOption) {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = option === selectedOption;

  return (
    <Pressable
      onPress={()=>setSelectedOption(option)}
      style={[
        styles.container,
        isSelected && { backgroundColor: "#E1F396", borderColor: "#E1F396" },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}

export default AnswerOption;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 100,
  },
});
