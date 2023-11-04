import React from "react";
import { StyleSheet, Text, View } from 'react-native';
const Footer = () => {
    return (
       <View style = {StyleSheet.footer}>
        <Text> Footer </Text>

       </View>
    );
};

const stlyes = StyleSheet.create({
    footer: {
        height: 60,
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'bottom',
    }
})
export default Footer;