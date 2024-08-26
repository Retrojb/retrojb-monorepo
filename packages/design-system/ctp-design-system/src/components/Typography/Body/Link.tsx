import { Text, View, StyleSheet } from "react-native";
import React from "react";

interface ILinkText extends React.ComponentProps<typeof Text> {
  text: string;
}
export const LinkText = ({ text }: ILinkText) => {
  return <Text>{text}</Text>;
};

export default LinkText;

const styles = StyleSheet.create({
  fontStyle: {
    fontStyle: "normal",
    fontSize: 16,
  },
});
