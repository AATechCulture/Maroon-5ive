import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';


const Footer = () => {
    return (
        
        <View>       
        <Image 
          source={require("./Images/Footer.png")}
          style={styles.Logo}
        />
         
       </View>
       
    );
};

const styles = StyleSheet.create({
    font: {
        color: "#085abd",
        fontSize: 17,
        fontWeight: "bold",
        // fontFamily: "Courier",
        bottom: -45,
    },
    Logo: {
        top: 0,
        height: 150,
        width: 430,
    }

})
export default Footer;