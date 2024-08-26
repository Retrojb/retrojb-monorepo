import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import Constants from "expo-constants";

const App = () => {

        const context = require('./app/_layout');

    return <ExpoRoot context={context} />
}