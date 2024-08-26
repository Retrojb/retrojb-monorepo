import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

export interface IButtonProps extends React.ComponentProps<typeof Pressable> {
  label: string;
  onPress: () => void;
}

export const Button = ({ label, onPress }: IButtonProps): JSX.Element => {
  return (
    <Pressable style={styles.btnMainContainer} onPress={onPress}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default Button;
const styles = StyleSheet.create({
  btnMainContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderColor: "#00FFF0",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#aaa000",
  },
});
