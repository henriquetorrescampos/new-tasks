import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 15,
  },
  container: {
    backgroundColor: "#F9F9F9",
    // borderRadius: 5,
    // shadowColor: "black", // Shadow color
    // shadowOffset: { width: 0, height: -2 },
    // shadowOpacity: 0.1, // Shadow opacity
    // elevation: 5,
    // borderTopColor: 1,
    // borderTopColor: "#6e6b6b",
  },
  headerTask: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    alignItems: "center",
  },
  headerContentTitle: {
    fontWeight: "bold",
    fontSize: 26,
  },
  headerContentSubTitle: {
    color: "#474646b0",
  },
  newTaskButton: {},
});
