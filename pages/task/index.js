import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Task from "../../components/TasksComponents/TodayTask";
import ModalNewTask from "../../components/TasksComponents/ModalNewTask";
import styles from "./style";
import { objectActivities } from "../../activities";

export default function TodayTask() {
  // const [task, setTask] = useState("Today");

  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  // const [activities, setActivities] = useState(objectActivities);

  useEffect(() => {
    const taskFilter = objectActivities.filter((task) =>
      task.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
    );
    setTasks(taskFilter);
  }, [search]);

  // const navigation = useNavigation();
  // const handlePress = () => {
  //   navigation.navigate("NewTask");
  // };

  function getDate() {
    const now = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(now);
  }

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleSubmit = (newTask) => {
    console.log("Task submitted", newTask);
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <View style={styles.headerTask}>
            <View>
              <Text style={styles.headerContentTitle}>Today's Task</Text>
              <Text style={styles.headerContentSubTitle}>{getDate()}</Text>
            </View>
            <TouchableOpacity
              onPress={handlePress}
              style={styles.newTaskButton}
            >
              <MaterialCommunityIcons name="plus" size={16} color={"#0D5BFB"} />

              <Text style={styles.netTaskButtonContent}>New Task</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search for task"
          ></TextInput>

          <View>
            {tasks.length === 0 ? (
              <Text style={styles.noTasksFound}>No tasks found.</Text>
            ) : (
              tasks.map((activity) => (
                <Task key={activity.id} objectActivities={activity}></Task> //component
              ))
            )}
          </View>
        </View>

        <ModalNewTask //component
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSubmit={handleSubmit}
        ></ModalNewTask>
      </View>
    </ScrollView>
  );
}
