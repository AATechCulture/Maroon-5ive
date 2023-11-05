import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import styles from "../components/Styles";
import Footer from "../Footer";

export default function Page2({ navigation }) {
  const [choice, setChoice] = useState(false);
  const [selectedName, setSelectedName] = useState("Mike Jones");
  const names = ["MIke Jones", "Sara T", "Ruth", "Jhon"];

  return (
    <View style={styles.startBody}>
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Are you traveling with family?</Text>
        <View style={styles.checkboxOption}>
          <Text
            onPress={() => {
              setChoice(true);
            }}
          >
            Yes
          </Text>
          <CheckBox checked={choice} onPress={() => setChoice(true)} />

          <Text
            style={styles.checkbox} // Add any necessary styling here
            onPress={() => {
              setChoice(false);
            }}
          >
            No
          </Text>
          <CheckBox checked={!choice} onPress={() => setChoice(false)} />
        </View>
        {choice ? (
          <View style={styles.dropdownContainer}>
            <Text>Select Account Holder:</Text>
            <Picker
              selectedValue={selectedName}
              onValueChange={(itemValue) => setSelectedName(itemValue)}
            >
              {names.map((name, index) => (
                <Picker.Item key={index} label={name} value={name} />
              ))}
            </Picker>
          </View>
        ) : null}
      </View>
      <Footer />
      <View style={styles.exclusiveText}>
        <TouchableOpacity onPress={() => navigation.navigate("Page3")}>
          <Text>Page 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
