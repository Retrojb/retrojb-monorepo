import { Text, StyleSheet } from "react-native";
import React from "react";

interface IBodyText extends React.ComponentProps<typeof Text> {
  text: string;
}
export const BodyText = ({ text }: IBodyText) => {
  return <Text>{text}</Text>;
};

export default BodyText;

const styles = StyleSheet.create({
  textContainer: {
    padding: 16,
  },
  fontStyle: {
    fontStyle: "normal",
    fontSize: 16,
  },
});
