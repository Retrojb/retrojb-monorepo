import { version } from './package.json';
import { ExpoGoConfig} from "expo-constants/build/Constants.types";

export default ({ config }): ExpoGoConfig => ({
    ...config,
    name: "native-sandbox",
    slug: "native-sandbox",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
    },
    ios: {
        "supportsTablet": true
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/images/adaptive-icon.png",
            backgroundColor: "#ffffff"
        }
    },
    web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/images/favicon.png"
    },
    plugins: [
        "expo-router"
    ],
    experiments: {
        typedRoutes: true
    },
    extra: {
        storybookEnabled: process.env.STORYBOOK_ENABLED
    }

})