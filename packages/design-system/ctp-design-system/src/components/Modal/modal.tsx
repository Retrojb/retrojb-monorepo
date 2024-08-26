import React from "react";
import {
  View,
  Text,
  Modal as RNModal,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Button from "../Button/Button";
import { LargeHeading } from "../Typography/Headers";

export interface IModalProps
  extends React.PropsWithChildren<
    Pick<React.ComponentProps<typeof RNModal>, "visible">
  > {
  modalHeading: string;
  bodyText?: string;
  scrimOnPress?: () => void;
  buttonProps: React.ComponentProps<typeof Button>;
}

export const Modal = ({
  bodyText,
  modalHeading,
  visible,
  buttonProps,
  // scrimOnPress
}: IModalProps): JSX.Element => {
  const renderModalHeader = () => {
    return (
      <View style={styles.headerMainContainer}>
        <Text>{modalHeading}</Text>
      </View>
    );
  };

  const renderModalBody = () => (
    <View style={styles.bodyMainContainer}>
      <Text>{bodyText}</Text>
    </View>
  );

  const renderModalFooter = () => (
    <View style={styles.footerMainContainer}>
      <View style={styles.footerButtonContainer}>
        <Button label={buttonProps.label} onPress={buttonProps.onPress} />
      </View>
    </View>
  );
  return (
    <View style={styles.centerView}>
      <RNModal
        visible={visible}
        transparent
        animationType={"fade"}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centerView}>
          <View style={styles.contentMainContainer}>
            {renderModalHeader()}
            {renderModalBody()}
            {renderModalFooter()}
          </View>
        </View>
      </RNModal>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerMainContainer: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 4,
    paddingVertical: 8,
    borderColor: "black",
    borderWidth: 2,
  },
  contentMainContainer: {
    margin: 20,
    width: 350,
    height: 450,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 32,
    padding: 16,
    alignItems: "center",
  },
  bodyMainContainer: {
    height: "75%",
    backgroundColor: "green",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
  },
  footerMainContainer: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    paddingVertical: 12,
  },
  footerButtonContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
  },
});
