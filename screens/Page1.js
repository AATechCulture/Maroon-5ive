import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../components/Styles';
import Footer from '../Footer';
import { StyleSheet } from 'react-native';
import Sky from "../Images/sky.png"

export default function Page1({ navigation}) {




  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleLogin = () => {
    // Add your Page1 logic here
    console.log('Page1 pressed');
  };

  return (
    
    <View style={styles.startBody}>
      <ImageBackground 
          source={require("../Images/sky.png")}
          style={styles.background}
        />
      <View style={styles.exclusiveText}>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
          <Footer />
      </TouchableOpacity>
    
    
    </View>
    
  );
};
const background = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '50%',
    resizeMode: 'contain', 
    backgroundColor: "rgba(0,0,0,0)"
  },

});

