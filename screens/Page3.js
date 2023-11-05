import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once, like componentDidMount

  const componentsToRender = [];

  for (let i = 0; i < 5; i++) {
    componentsToRender.push(<DynamicComponent key={i} />);
  }

  return (
    <View style={styles.startBody}>
      <View style={styles.questionContainer}>
        <Text>dynamic rendering below</Text>
        <View>{componentsToRender}</View>
      </View>
      <View style={styles.exclusiveText}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Page4", { seatsToOccupy, navigation, flightData })
          }
        >
          <Text>Page 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
