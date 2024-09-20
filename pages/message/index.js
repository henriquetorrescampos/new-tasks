import { View, Text } from "react-native";

import styles from "./style";

export default function Message() {
  return (
    <View>
      <Text style={styles.noMessage}>There are no messages here</Text>
    </View>
  );
}
