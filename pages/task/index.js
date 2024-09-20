import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Task from "../../components/TasksComponents/TodayTask";
import ModalNewTask from "../../components/TasksComponents/ModalNewTask";
import styles from "./style";
import { objectActivities } from "../../activities";

export default function TodayTask() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("tasks");

        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error("Failed to load tasks", error);
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    // if (search === "") return;
    const taskFilter = objectActivities.filter((task) =>
      task.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
    );
    setTasks(taskFilter);
  }, [search]);

  function date() {
    const now = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(now);
  }

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleSubmit = async (newTask) => {
    const updatedTasks = [...tasks, newTask]; // Add the new task
    setTasks(updatedTasks);
    setModalVisible(false);

    try {
      // Save updated tasks to AsyncStorage
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      console.error("Failed to save task", error);
    }
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <View style={styles.headerTask}>
            <View>
              <Text style={styles.headerContentTitle}>Today's Task</Text>
              <Text style={styles.headerContentSubTitle}>{date()}</Text>
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
            {tasks.length === 0 ? ( //se task.len == 0 ?, senao :
              <Text style={styles.noTasksFound}>No task found.</Text>
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
