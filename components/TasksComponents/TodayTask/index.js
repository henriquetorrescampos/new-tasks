// [
//   {
//    nome: "Estudar",
//    descricao: "Estudar para DevInHouse",
//    status: true,
//    data: 16/09/2024
//   }
//   ]
import { View, Text, Button, TouchableOpacity, Switch } from "react-native";
import styles from "./style.js";
import { useState } from "react";

export default function Task({ activities }) {
  const [isEnable, setIsEnable] = useState(false);

  return (
    <View style={styles.activityContainer}>
      <TouchableOpacity>
        <View style={styles.activityContent}>
          <Text style={styles.activityName}>{activities.name}</Text>
          <Text style={styles.activityDescription}>
            {activities.description}
          </Text>
          <View style={styles.activityLine}></View>
          <Text style={styles.activityDate}>{activities.date}</Text>
          {/* <Switch onValueChange={setIsEnable} value={isEnable} ></Switch> */}
        </View>
      </TouchableOpacity>
    </View>
  );
}
