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
import styles from "../components/Styles";

export default function Page3({ navigation }) {
  const [seatsToOccupy, setSeatsToOccupy] = useState(2);

  return (
    <View style={styles.startBody}>
      <View style={styles.exclusiveText}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Page4", { seatsToOccupy })}
        >
          <Text>Page 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
