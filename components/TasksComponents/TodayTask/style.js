import { StyleSheet } from "react-native";

export default StyleSheet.create({
  activityContainer: {
    backgroundColor: "#FFF",
    borderRadius: 6,
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, // Shadow opacity
    elevation: 5,
    marginTop: 26,
    marginHorizontal: 25,
  },
  activityContent: {
    marginHorizontal: 19,
    marginVertical: 20,
  },

  activityName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 3,
  },
  activityDescription: {
    fontSize: 14,
    color: "#474646b0",
  },
  activityLine: {
    height: 1,
    backgroundColor: "#CCC",
    marginVertical: 10,
  },
  activityDate: {
    fontSize: 14,
    color: "#474646b0",
  },
});
