import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
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
  newTaskButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2EBFA",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  netTaskButtonContent: {
    fontSize: 16,
    color: "#0D5BFB",
    marginLeft: 2,
  },
  searchInput: {
    backgroundColor: "#E2EBFA",
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    alignItems: "center",
    paddingVertical: 12,
    paddingLeft: 10,
  },
  noTasksFound: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 20,
    marginTop: 20,
  },
});
