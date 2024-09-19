import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TodayTask from "./pages/task/index";
import Message from "./pages/message";
import LastActivity from "./pages/lastActivity";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Today's Task"
          screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: "black" },
            tabBarLabelStyle: { fontSize: 14 },
          }}
        >
          <Tab.Screen name="Messages" component={Message}></Tab.Screen>

          <Tab.Screen name="Today's Task" component={TodayTask}></Tab.Screen>

          <Tab.Screen
            name="Last Activity"
            component={LastActivity}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
