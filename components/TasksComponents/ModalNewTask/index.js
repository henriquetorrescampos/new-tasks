import { useState } from "react";
import {
  Modal,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  Text,
} from "react-native";

import styles from "./style";

export default function ModalNewTask({ visible, onClose, onSubmit }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    onSubmit({ taskName, description, status, date });
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
      presentationStyle="overFullScreen"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.modalTextInput}
            placeholder="Task name? "
            onChangeText={setTaskName}
            value={taskName}
          ></TextInput>

          <TextInput
            style={styles.modalTextInput}
            placeholder="Description? "
            onChangeText={setDescription}
            value={description}
          ></TextInput>

          <Switch value={status} onValueChange={setStatus}></Switch>

          <TextInput
            style={styles.modalTextInput}
            placeholder="Date"
            keyboardType="numeric"
            onChangeText={setDate}
            value={date}
          ></TextInput>

          <View style={styles.modalTouchable}>
            <TouchableOpacity
              style={styles.modalTouchableCancel}
              onPress={onClose}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalTouchableSend}
              onPress={handleSubmit}
            >
              <Text>Send Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
