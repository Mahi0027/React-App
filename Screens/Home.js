import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
    const goToLogin = () => {
      navigation.navigate('Login');
    } 
    return (
      <View style={styles.home}>
        <Text onPress={goToLogin}>Welcome To This App</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  