import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import styles from "./style.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Task({ objectActivities }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted); // ! troca pra true
  };

  return (
    <View style={styles.activityContainer}>
      <TouchableOpacity onPress={toggleCompletion}>
        <View style={styles.activityContent}>
          <Text
            style={[
              styles.activityName,
              isCompleted && { textDecorationLine: "line-through" }, // Strikethrough if completed
            ]}
          >
            {objectActivities.name}
          </Text>

          <Text
            style={[
              styles.activityDescription,
              isCompleted && { textDecorationLine: "line-through" }, // Strikethrough if completed
            ]}
          >
            {objectActivities.description}
          </Text>

          <View style={styles.activityLine}></View>

          <Text style={styles.activityDate}>{objectActivities.date}</Text>

          {isCompleted && (
            <MaterialCommunityIcons
              style={styles.checkIcon}
              name="check-circle"
              size={26}
              color={"#065FFB"}
            ></MaterialCommunityIcons>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
