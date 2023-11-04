import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  startBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  questionBox: {
    backgroundColor: "#87CEEB",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 30,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkboxOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  exclusiveText: {
    // Your existing styles for the "Next" button
    mariginTop: 20,
  },
  // Add any other styles you need for your app
});

export default styles;
