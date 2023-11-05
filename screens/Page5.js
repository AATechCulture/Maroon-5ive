import React, {useEffect} from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from '../components/Styles';
import EmailApi from "../api/EmailApi"

const boxWidth = "auto" 
const boxHeight = 150

export default function Page5() {
  

  //this is the on load function
  useEffect(()=>{
    //when the screen loads, send email
    //EmailApi()

  },[])

  // <Page5 navigation={navigation} boxWidth={150} boxHeight={150} />
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Images/sky.png')}
        style={background.backgroundImage}
      >
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
    bottom:200
  },
  circularPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    Font: "Bold",
    padding: 20,
    color: 'white',
    fontSize: 18,
  },

});
