import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../components/Styles';

export  default function Page2({ navigation}) {
  return (
    <View style={styles.startBody}>
    <View style={styles.exclusiveText}>
      <TouchableOpacity onPress={() => navigation.navigate('Page3')}>
        <Text>Page 3</Text>
      </TouchableOpacity>
      </View>
  </View>
  );
}