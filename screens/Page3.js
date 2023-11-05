import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Button,
  StyleSheet,
  
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styles from "../components/Styles";


export default function Page3({ navigation }) {
  const [seatsToOccupy, setSeatsToOccupy] = useState(2);

  return (
    <View style={styles.startBody}>
      <View style={style.box}>
        <Text>
          <Text style={style.text}> Depart </Text> <Text style={style.text2}> DFW to HSV</Text>
        </Text>
        <Text style={style.text3}> Saturday, November 11, 2023 </Text>
        <Text style={style.text4}> 7:03 AM → 8:54 AM          Nonstop         1h 51m</Text>
        <Text style={style.text4}> Main Cabin</Text>
        <View style={style.box2}></View>
        <Text style={style.text5}> Operated by Envoy Air As American Eagle</Text>
        <Text>
          <Text style={style.text6}> Details </Text><Text style={style.text5}> | </Text><Text style={style.text6}>Change </Text>
        </Text>  
      </View>
      <TouchableOpacity
          onPress={() => navigation.navigate("Page4", { seatsToOccupy })}
        >
          <Text>Page 4</Text>
        </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  box: {
    width: "90%", 
    height: "20%", 
    backgroundColor: '#E5E4E2', 
    borderWidth: 1, 
    borderColor: '#E5E4E2', 
    bottom: 325,
    borderRadius: 10,
  },
  box2: {
    width: "97%",
    height: "2%",
    backgroundColor: "#D3D3D3",
    left: "1%",
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    color: "green"
  },
  text2: {
    fontSize: 25,
    color: "#085abd"
  },
  text3: {
    fontSize: 18,
    color: "gray"
  },
  text4: {
    fontSize: 18,
    color: "black"
  },
  text5: {
    fontSize: 18,
    color: "gray"
  },
  text6: {
    fontSize: 18,
    color: "#0096FF",
    textDecorationLine: "underline"
  }

});