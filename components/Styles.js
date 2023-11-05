import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  checkBoxContainer: {
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
  },
  nameText: {
    weight: 150,
    height: 55,
    justifyContent: "center",
    display: "flex",
  },
  nameAndCheckbox: {
    width: 155,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start", 
    alignContent: "center",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center", // Center horizontally
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedValuesContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  selectedValuesText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    height: "40px",
    backgroundColor: "#2980b9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  // Input: {
  //   width: "80%",
  //   height: "40px",
  //   backgroundColor: "rgba(255, 255, 255, 0.7)",
  //   marginBottom: "20px",
  //   padding: "10px",
  //   borderRadius: "5px",
  // },
  startBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  exclusiveText: {
    height: "20%",
    width: "15%",
    marginRight: "15%",
    fontWeight: "1000",
    fontSize: 4,
    color: "white",
  },
  startContainer: {
    display: "flex",
    justifyContent: "center",
  },
  startSection: {
    position: "relative",
    fontFamily: "Nunito",
    fontSize: 16, // Adjust the font size as needed
    color: "#fff",
    width: "94%", // Use percentage values differently than in web, adjust accordingly
    minHeight: 400,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 16, // Adjust padding as needed
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  startSectionHeading: {
    backgroundColor: "lightpink",
    color: "firebrick",
    fontWeight: "bold",
    padding: 8, // Adjust padding as needed
    marginBottom: 8, // Adjust margin as needed
  },
  offscreen: {
    position: "absolute",
    left: -9999,
  },
  startForm: {
    // Styles for startForm
  },
  startForm: {
    fontFamily: "Nunito",
    fontSize: 22,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flexGrow: 1,
    paddingBottom: 16, // Adjust as needed
  },
  startLabel: {
    marginTop: 16,
  },
  inputUsername: {
    fontFamily: "Nunito",
    fontSize: 22,
    padding: 4, // Adjust padding as needed
    borderRadius: 8, // Adjust border radius as needed
  },
  inputPassword: {
    fontFamily: "Nunito",
    fontSize: 22,
    padding: 4, // Adjust padding as needed
    borderRadius: 8, // Adjust border radius as needed
  },
  startButton: {
    fontFamily: "Nunito",
    fontSize: 22,
    padding: 8, // Adjust padding as needed
    borderRadius: 8, // Adjust border radius as needed
    backgroundColor: "#cf7d03",
    borderColor: "#cf7d03",
    color: "#fff",
  },
  forgotPassword: {
    fontSize: 14, // Adjust font size as needed
    width: "100%",
  },
  startText: {
    textAlign: "center",
    fontSize: 14, // Adjust font size as needed
    marginBottom: 15,
  },
  startCreate: {
    fontFamily: "Nunito",
    fontSize: 22,
    padding: 4, // Adjust padding as needed
    backgroundColor: "black",
    color: "#fff",
  },
  questionContainer: {
    flex: 1,
    alignItems: "center",
    height: "auto",
  },
  questionBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  questionTextContainer: {
    backgroundColor: "#ECECEC",
    padding: 10,
    borderRadius: 5,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  checkboxOption: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkboxItem: {
    alignItems: "center",
  },
  checkbox: {
    // Add any necessary styling here
  },
  dropdownContainer: {
    marginTop: 20, // Adjust this value to move the dropdown down if needed
  },
  exclusiveText: {
    // Your existing styles for the "Next" button
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 220,
    bottom: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

  export default styles;