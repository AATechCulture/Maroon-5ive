import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';


const Stack = createStackNavigator();
import Footer from './Footer';

export default function App() {



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
