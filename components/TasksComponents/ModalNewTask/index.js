import { useState } from "react";
import {
  Modal,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import styles from "./style";

export default function ModalNewTask({ visible, onClose, onSubmit }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    onSubmit({ taskName, description, status, date }); //Pass data to the parent
    setTaskName("");
    setDescription("");
    setStatus(false);
    setDate("");
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            placeholder="Task name? "
            onChangeText={setTaskName}
            value={taskName}
          ></TextInput>

          <TextInput
            placeholder="Description? "
            onChangeText={setDescription}
            value={description}
          ></TextInput>

          <Switch value={status} onValueChange={setStatus}></Switch>

          <TextInput
            placeholder="Date"
            keyboardType="numeric"
            onChangeText={setDate}
            value={date}
          ></TextInput>

          <TouchableOpacity onPress={onClose}>
            <Text>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSubmit}>
            <Text>Send Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
