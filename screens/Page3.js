import React, { useState, useEffect } from "react";
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
import FlightApi from "../api/FlightData";

function DynamicComponent() {
  return (
    <View style={styles.dynamicComponent}>
      <Text>Dynamic Component</Text>
    </View>
  );
}


export default function Page3({ navigation }) {
  const [seatsToOccupy, setSeatsToOccupy] = useState(2);
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // const data = await FlightApi();
        setFlightData(data);
        console.log(data);
        console.log("got data");
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    }

    // fetchData();
  }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount

  const componentsToRender = [];

  for (let i = 0; i < 5; i++) {
    componentsToRender.push(<DynamicComponent key={i} />);
  }

  // return (
  //   <View style={styles.startBody}>
  //     <View style={styles.questionContainer}>
  //       <Text>dynamic rendering below</Text>
  //       <View>{componentsToRender}</View>
  //     </View>
  //     <View style={styles.exclusiveText}>
  //       <TouchableOpacity
  //         onPress={() =>
  //           navigation.navigate("Page4", { seatsToOccupy, navigation, flightData })
  //         }

  return (
    <View style={styles.startBody}>
      <View style={style.box}>
        <Text>
          <Text style={style.text}> Depart </Text> <Text style={style.text2}> DFW to HSV</Text>
        </Text>
        <Text style={style.text3}> Saturday, November 11, 2023 </Text>
        <Text style={style.text4}> </Text>
        <Text style={style.text4}> </Text>
        <View style={style.box2}></View>
        <Text></Text>
        <Text style={style.text6}> American Airlines flights may be listed first.</Text>
      <View style={APIcomponent.box}>
        <View style={APIcomponent.departureBox}>
          <Text style={APIcomponent.text1}>Hello</Text>
        </View>
        <View style={APIcomponent.destinationBox}>
          <Text style={APIcomponent.text1}> Hiya</Text>
        </View>
        <View style={APIcomponent.departureTime}>
          <Text style={APIcomponent.text1}>Time 1</Text>
        </View>
        <View style={APIcomponent.destinationTime}>
          <Text style={APIcomponent.text1}>Time 2</Text>
        </View>
        <View style={APIcomponent.AmountOfStops}>
          <Text style={APIcomponent.text1}>Amount of stops</Text>
        </View>
        <View style={APIcomponent.FlightTime}>
          <Text style={APIcomponent.text1}>FlightTime</Text>
        </View>
        <View style={APIcomponent.FlightType}>
          <Text style={APIcomponent.text1}>FlightType</Text>
        </View>
        <View style={APIcomponent.DollarAmount}>
          <Text style={APIcomponent.text1}>Price</Text>
        </View>
      </View>
      </View>
      <TouchableOpacity
          onPress={() => navigation.navigate("Page4", { navigation })}
        >
          <Text>Next</Text>
        </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  box: {
    width: "90%", 
    height: "18%", 
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
  },
  text6:{
    fontSize: 17,
    color: "green"
  }

});
const APIcomponent = StyleSheet.create({
  box: {
    display: "flex",
    width: "100%",
    height: 150,  
    backgroundColor: '#E5E4E2', 
    borderWidth: 1, 
    borderColor: '#E5E4E2', 
    position: "relative",
    top: 30,
    borderRadius: 10,
  },
  departureBox: {
    top: 10,
    left: 10,
    width: 75,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    alignItems : "center",
  },
  destinationBox: {
    top: -20,
    left: 100,
    width: 75,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    alignItems : "center",
  },
  departureTime: {
    top: -15,
    left: 10,
    width: 90,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    alignItems : "center",
  },
  destinationTime: {
    top: -45,
    left: 100,
    width: 75,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    alignItems : "center",
  },
  AmountOfStops: {
    top: -45,
    left: 10,
    width: 75,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    alignItems : "center",
  },
  FlightTime: {
    top: -75,
    left: 100,
    width: 75,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    alignItems : "center",
  },
  DollarAmount: {
    top: -170,
    left: 275,
    width: 75,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    alignItems : "center",
  },
  FlightType: {
    top: -170,
    left: 275,
    width: 75,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    alignItems : "center",
  },
  text1: {
    fontSize: 20,
    color: "gray",
  }
})