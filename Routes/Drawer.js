import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import LogoutStack from './LogoutStack'

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    },
    Logout: {
        screen: LogoutStack,
    },
});

export default createAppContainer(RootDrawerNavigator);