import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../Screens/About';
import Header from '../Shared/Header';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={ navigation } title='About App' />,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: '#eee', height: 70},
    }
});

export default AboutStack; 