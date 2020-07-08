import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Details from '../Screens/Details';
import Header from '../Shared/Header';

ComponentWillMount = ()  => {
    BackHandler.addEventListener('hardwareBackPress', function() {
      /**
       * this.onMainScreen and this.goBack are just examples,
       * you need to use your own implementation here.
       *
       * Typically you would use the navigator here to go to the last state.
       */
    
      if (!this.onMainScreen()) {
        this.goBack();
        /**
         * When true is returned the event will not be bubbled up
         * & no other back action will execute
         */
        return true;
      }
      /**
       * Returning false will let the event to bubble up & let other event listeners
       * or the system's default back action to be executed.
       */
      return false;
    });
  }
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={ navigation } title='Home' />,
            }
        }
    },
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={ navigation } title='Login' />,
                headerLeft: () => null,
            }
        }
    },
    Details: {
        index: 0,
        screen: Details,
        headerMode: 'none',
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={ navigation } title='Details' />,
                headerLeft: () => null,
            }
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'red',
        headerStyle: { backgroundColor: '#eee', height: 70}
    }
});

export default HomeStack; 