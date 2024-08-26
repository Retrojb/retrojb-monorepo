import React from "react";
import { Text, View, StyleSheet } from "react-native";

export interface IInputLabel
  extends React.PropsWithChildren<React.ComponentProps<typeof Text>> {
  formLabel?: string;
  isRequired?: boolean;
}
export const InputLabel = ({
  formLabel,
  isRequired,
  children,
}: IInputLabel) => {
  return (
    <View style={[styles.mainContainer]}>
      {isRequired ? (
        <View style={[styles.requiredContainer]}>
          <Text>{formLabel ? formLabel : children}</Text>
          <Text>*</Text>
        </View>
      ) : (
        <Text>{formLabel ? formLabel : children}</Text>
      )}
    </View>
  );
};

export default InputLabel;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 4,
  },
  requiredContainer: {
    flexDirection: "row",
    gap: 4,
  },
});
