import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Button, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../components/Styles';
import Footer from '../Footer';
import { StyleSheet } from 'react-native';
import Sky from "../Images/sky.png"
import { image } from 'react-native';

export default function Page1({ navigation }) {
  const handleLogin = () => {
    // Add your Page1 logic here
    console.log("Page1 pressed");
  };

  return (
    <View style={styles.startBody}>
      <ImageBackground
        source={require("../Images/list.png")}
        style={background.backgroundImage}
      >
      

        <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const background = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
});

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: 400,
    height: 220,
    bottom: 0,
  },
  image2: {
  width: 400,
  height: 220,
  bottom: 120,
  },
  image3: {
    width: 400,
    height: 220,
    bottom: 100,
},
});

