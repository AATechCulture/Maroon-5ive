import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';


const Stack = createStackNavigator();

export default function App() {

  const [groupnumber, setgroupnumber] = useState(Number);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1"
      // screenOptions={{
      //   headerShown: false, // Hide the header
      // }}
      >
        <Stack.Screen name= "Page1" component={Page1} />
        <Stack.Screen name= "Page2" component={Page2} />
        <Stack.Screen name= "Page3" component={Page3} groupnumber = {groupnumber} setgroupnumber = {setgroupnumber}/>
        <Stack.Screen name= "Page4" component={Page4} groupnumber = {groupnumber} setgroupnumber = {setgroupnumber}/>
        <Stack.Screen name= "Page5" component={Page5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
