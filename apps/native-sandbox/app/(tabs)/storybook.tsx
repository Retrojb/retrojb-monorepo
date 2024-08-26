import Constants from "expo-constants";
import { App } from "expo-router/build/qualified-entry";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const StorybookUI = require("../../.storybook").default;

const StorybookStackNavigator = createNativeStackNavigator();
export const StorybookTab = () => {
  return (
    <StorybookStackNavigator.Navigator>
      <StorybookStackNavigator.Screen
        name="Storybook Native"
        component={StorybookUI}
      />
    </StorybookStackNavigator.Navigator>
  );
};

export default StorybookTab;
