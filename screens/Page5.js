import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from '../components/Styles';

export default function Page5({ navigation, boxWidth, boxHeight }) {
  <Page5 navigation={navigation} boxWidth={150} boxHeight={150} />
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Images/sky.png')}
        style={background.backgroundImage}
      >
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
