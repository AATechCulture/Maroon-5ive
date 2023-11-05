import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { CheckBox } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import styles from "../components/Styles";
import { StyleSheet } from "react-native";
import Footer from "../Footer";
import Sky from "../Images/sky.png";

export default function Page2({ navigation }) {
  const [choice, setChoice] = useState(false);
  const [selectedName, setSelectedName] = useState(["Mike Jones"]); // Use an array for selectedName
  const names = ["Mike Jones", "Sara T", "Ruth", "Jhon"];

  const toggleNameSelection = (name) => {
    const updatedNames = [...selectedName];
    if (updatedNames.includes(name)) {
      updatedNames.splice(updatedNames.indexOf(name), 1);
    } else {
      updatedNames.push(name);
    }
    setSelectedName(updatedNames);
  };

  return (
    <View style={styles.startBody}>
      <ImageBackground source={Sky} style={background.backgroundImage}>
        <View style={styles.questionContainer}>
          <View style={styles.questionBox}>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionText}>
                Are you traveling with family?
              </Text>
            </View>
            <View style={styles.checkboxOption}>
              <View style={styles.checkboxItem}>
                <Text
                  onPress={() => {
                    setChoice(true);
                  }}
                >
                  Yes
                </Text>
                <CheckBox checked={choice} onPress={() => setChoice(true)} />
              </View>
              <View style={styles.checkboxItem}>
                <Text
                  onPress={() => {
                    setChoice(false);
                  }}
                >
                  No
                </Text>
                <CheckBox checked={!choice} onPress={() => setChoice(false)} />
              </View>
            </View>
            {choice ? (
              <View style={styles.dropdownContainer}>
                <Text>Select Account Holders:</Text>
                {names.map((name, index) => (
                  <View key={index} style={styles.checkboxItem}>
                    <View style={styles.nameAndCheckbox}>
                      <View style={styles.checkBoxContainer}>
                        <CheckBox
                          checked={selectedName.includes(name)}
                          onPress={() => toggleNameSelection(name)}
                        />
                      </View>

                      <Text
                        onPress={() => toggleNameSelection(name)}
                        style={styles.nameText}
                      >
                        {name}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Page3")}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <Footer />
    </View>
  );
}

const background = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
