// @flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import theme from '../../../shared/theme';

// Stacks for the individual views
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import NotificationsStack from './NotificationsStack';
import DMStack from './DirectMessageStack';
import SearchStack from './SearchStack';
import {
  SearchIcon,
  HomeIcon,
  MessageIcon,
  NotificationIcon,
  ProfileIcon,
} from './style';

const routeConfiguration = {
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <HomeIcon color={tintColor} />,
    },
  },
  Messages: {
    screen: DMStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <MessageIcon color={tintColor} />,
    },
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <SearchIcon color={tintColor} />,
    },
  },
  Notifications: {
    screen: NotificationsStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <NotificationIcon color={tintColor} />,
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <ProfileIcon color={tintColor} />,
    },
  },
};

const tabBarConfiguration = {
  tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: theme.bg.default,
    inactiveTintColor: theme.text.placeholder,
    // background color is for the tab component
    activeBackgroundColor: theme.bg.reverse,
    inactiveBackgroundColor: theme.bg.reverse,
    labelStyle: {
      fontWeight: 'bold',
      marginBottom: 3,
    },
  },
};

// NOTE(@mxstbr): I figured this out manually by simply inspecting in the simulator
export const TAB_BAR_HEIGHT = 375;

export default createBottomTabNavigator(
  routeConfiguration,
  tabBarConfiguration
);
