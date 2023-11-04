import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../components/Styles';




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
      <View style={styles.exclusiveText}>
        <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
          <Text>Page 2</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

