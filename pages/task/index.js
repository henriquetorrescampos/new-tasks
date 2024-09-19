import { View, Text, Button } from "react-native";
import { useState } from "react";

import Task from "../../components/TasksComponents/TodayTask";
import styles from "./style";
import { activities } from "../../activities";

export default function TodayTask() {
  const [task, setTask] = useState("Today");

  return (
    <View>
      {/* <View style={styles.navBar}>
        <Button
          onPress={() => {
            setTask("Messages");
          }}
          color={"#B3B3B3"}
          title="Messages"
        ></Button>
        <Button
          onPress={() => {
            setTask("Today");
          }}
          color={"#B3B3B3"}
          title="Today's Task"
        ></Button>
        <Button
          onPress={() => {
            setTask("Last");
          }}
          color={"#B3B3B3"}
          title="Last Activity"
        ></Button>
      </View> */}

      <View style={styles.container}>
        <View style={styles.headerTask}>
          <View>
            <Text style={styles.headerContentTitle}>Today's Task</Text>
            <Text style={styles.headerContentSubTitle}>Wednesday, 18 Sep</Text>
          </View>
          <Button style={styles.newTaskButton} title="New Task"></Button>
        </View>

        <View>
          {activities.map((activity) => {
            return <Task activities={activity}></Task>;
          })}
        </View>
      </View>
    </View>
  );
}
