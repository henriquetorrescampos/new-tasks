import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5",
  },
  modalContent: {
    width: 300,
    padding: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTextInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2EBFA",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    marginTop: 10,
  },

  modalTouchable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalTouchableCancel: {
    backgroundColor: "#f5d2d3",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
  },

  modalTouchableSend: {
    backgroundColor: "#E2EBFA",
    borderRadius: 10,
    padding: 10,
  },
});
