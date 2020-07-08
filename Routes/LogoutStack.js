import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import Logout from '../Screens/Logout';
import Header from '../Shared/Header';

const screens = {
    Logout: {
        screen: Logout,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={ navigation } title='Log Out' />,
            }
        }
    },
}

const LogoutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: '#eee', height: 70},
    }
});

export default LogoutStack; 