import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import styles from "./style.js";

export default function Task({ objectActivities }) {
  const [isEnable, setIsEnable] = useState(false);

  return (
    <View style={styles.activityContainer}>
      <TouchableOpacity>
        <View style={styles.activityContent}>
          <Text style={styles.activityName}>{objectActivities.name}</Text>
          <Text style={styles.activityDescription}>
            {objectActivities.description}
          </Text>
          <View style={styles.activityLine}></View>
          <Text style={styles.activityDate}>{objectActivities.date}</Text>
          {/* <Switch onValueChange={setIsEnable} value={isEnable} ></Switch> */}
        </View>
      </TouchableOpacity>
    </View>
  );
}
