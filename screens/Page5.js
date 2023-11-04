import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../components/Styles';


export default function Page5({ navigation}) {
  return (
    <View style={styles.startBody}>
    <View style={styles.exclusiveText}>
      <TouchableOpacity onPress={() => navigation.navigate('Page1')}>
        <Text>Navigate to page 1</Text>
      </TouchableOpacity>
      </View>
  </View>
  );
}
