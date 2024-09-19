import { TextInput, View, Switch, Button } from "react-native";
import { useState } from "react";

import styles from "./style";

export default function NewTask() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);
  const [date, setDate] = useState("");

  function handleSubmit() {}

  function cancelSubmit() {}

  return (
    <View>
      <TextInput
        placeholder="Taks' name? "
        onChangeText={setTaskName}
        value={taskName}
      ></TextInput>

      <TextInput
        placeholder="Description"
        onChangeText={setDescription}
        value={description}
      ></TextInput>

      <Switch value={status} onValueChange={setStatus}></Switch>

      <TextInput
        placeholder="Date"
        onChangeText={setDate}
        value={date}
      ></TextInput>

      <Button title="Send Task" onPress={handleSubmit}></Button>
      <Button title="Cancel" onPress={cancelSubmit}></Button>
    </View>
  );
}
