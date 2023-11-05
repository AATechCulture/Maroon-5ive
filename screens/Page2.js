"react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Button,
  ImageBackground,
  Image,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import styles from "../components/Styles";
import { StyleSheet } from "react-native";
import Footer from "../Footer";
import Sky from "../Images/sky.png";
import { image } from "react-native";
import { useState } from "react";

export default function Page2({ navigation }) {
  const [choice, setChoice] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedName, setSelectedName] = useState("Mike Jones");
  const names = ["Mike Jones", "Sara T", "Ruth", "Jhon"];

  return (
    <View style={styles.startBody}>
      <ImageBackground
        source={require("../Images/sky.png")}
        style={background.backgroundImage}
      >
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
        <View style={styles.exclusiveText}>
          <TouchableOpacity onPress={() => navigation.navigate("Page3")}>
            <Text>Page 3</Text>
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

const style = StyleSheet.create({
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
});
