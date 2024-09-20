import { View, Text } from "react-native";
import styles from "./style";

export default function LastActivity() {
  return (
    <View>
      <Text style={styles.noApplication}>
        There are no recent applications here.
      </Text>
    </View>
  );
}
