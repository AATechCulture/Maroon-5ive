import React,{useEffect} from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from '../components/Styles';
import EmailApi from "../api/EmailApi"
export default function Page5({ navigation, boxWidth, boxHeight }) {

useEffect(()=>{

  EmailApi()
},[])
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Images/sky.png')}
        style={background.backgroundImage}
      >
        <View style={styles.topImageContainer}>
          <Image
            source={require('../Images/American-Airlines-Logo.png')} // Your top image
            style={styles2.topImage}
          />
        </View>
        <View style={styles.startBody}>
          <View style={styles.exclusiveText}>
            <TouchableOpacity onPress={() => navigation.navigate('Page1')}>
              <Text>Navigate to page 1</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[
          styles2.centeredBox,
          { width: boxWidth, height: boxHeight }
        ]}>
          <Image
            source={require('../Images/BlackFamily.png')}
            style={styles2.circularPhoto}
          />
          <Text style={styles2.text}>Jones Family</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const background = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
});

const styles2 = StyleSheet.create({
  centeredBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
  },
  circularPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontWeight: "bold",
    padding: 20,
    color: 'white',
    fontSize: 18,
  },
  topImage: {
    width: '100%', // Set the width to the full screen width
    height: 100, // Adjust the height as needed
    resizeMode: 'cover', // You can choose 'cover', 'contain', or other values
  },
});

styles.container = {
  flex: 1,
};

styles.topImageContainer = {
  flex: 0.2, // Adjust the flex value to control the size of the top image container
};
