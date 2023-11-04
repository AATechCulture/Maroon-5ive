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
import styles from "../components/Styles";
import Footer from "../Footer";

export default function Page2({ navigation }) {
  return (
    <View style={styles.startBody}>
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Are you traveling with family?</Text>
        <View style={styles.checkboxOption}>
          <Text>Yes</Text>
          <CheckBox />

          <View style={styles.checkboxOption}>
            <Text>No</Text>
            <CheckBox />
          </View>
        </View>
        <Footer />
      </View>

      <View style={styles.exclusiveText}>
        <TouchableOpacity onPress={() => navigation.navigate("Page3")}>
          <Text>Page 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
