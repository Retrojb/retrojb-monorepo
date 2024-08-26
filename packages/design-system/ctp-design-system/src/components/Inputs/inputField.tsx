import React, { useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { InputLabel } from "../Typography/Labels";

export interface IInputProps extends React.ComponentProps<typeof TextInput> {
  value?: string;
  placeholder: string;
  formLabel?: string;
  isRequired?: boolean;
}
export const InputField = ({
  value,
  placeholder,
  formLabel,
  isRequired,
  ...props
}: IInputProps) => {
  const [currVal, setCurrVal] = React.useState(value);

  useEffect(() => {
    if (value != null) {
      setCurrVal(value);
    }
  }, [value]);
  return (
    <View style={[styles.inputMainContainer]}>
      <View style={[styles.inputLabelContainer]}>
        <InputLabel formLabel={formLabel} isRequired={isRequired} />
      </View>
      <TextInput
        placeholder={placeholder}
        style={[styles.inputInnerContainer]}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputMainContainer: {
    width: "100%",
    padding: 8,
  },
  inputLabelContainer: {
    paddingBottom: 8,
  },
  inputInnerContainer: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    padding: 4,
  },
});
