import { Stack, Text } from "@tamagui/core";
import { TamaguiProvider } from "@tamagui/core";
import { SafeAreaView, View } from "react-native";
import { LogBox } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


import { config } from "./tamagui.config";

LogBox.ignoreAllLogs();

export function App() {
	return (
		<NavigationContainer>
		<TamaguiProvider config={config}>
			<SafeAreaView>
				<Stack>
				<Text
      // can add theme values
      color="$white"
      fontFamily="$body"
      // or just use direct values
      fontSize={20}
      hoverStyle={{
        color: '$colorHover',
      }}
    >Hello World</Text>
				</Stack>
			</SafeAreaView>
		</TamaguiProvider>
		</NavigationContainer>
	);
}
