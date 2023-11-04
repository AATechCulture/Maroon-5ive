import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../components/Styles';
import Footer from '../Footer';

export default function Page1({ navigation }) {
  const handleLogin = () => {
    // Add your Page1 logic here
    console.log("Page1 pressed");
  };

  return (
    
    <View style={styles.startBody}>
      <ImageBackground 
          source={require("../Images/sky.png")}
          style={styles.background}
        />
      <View style={styles.exclusiveText}>
        <TouchableOpacity onPress={() => navigation.navigate("Page2")}>
          <Text>Page 2</Text>
        </TouchableOpacity>
        
      </View>
      
    <Footer />
      
    </View>
  );
}
