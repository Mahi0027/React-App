import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Routes/Drawer'
import Login from './Screens/Login'

export default function App() {
  const [fontsLoaded, setFontsLoaded] =  useState(true)
  if(fontsLoaded) {
    return (
      <Navigator />
    )
  }
  else {
    return (
      <Login />
    )
  }
  // return (
    
  //   // <Login />
  //   // <Navigator />
  //   // <View style={styles.container}>
  //   //   <Text>Open up App.js to start working on your app!</Text>
  //   //   <StatusBar style="auto" />
  //   // </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
