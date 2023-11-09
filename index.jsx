import { AppRegistry, LogBox } from "react-native";
import { App } from "./src/App";
import { useState } from "react";

AppRegistry.registerComponent("main", () => App);

LogBox.install();
