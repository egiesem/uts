import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import App from './app';
import DrawerMenu from './Drawer/drawer-toolbar-android';
import BookmarkView from './Pages/bookmark';
import CalendarView from './Pages/calendar';
import ClientView from './Pages/client';
import InfoView from './Pages/info';
import SettingsView from './Pages/setting';
import { DrawerNavigator, StackNavigator } from 'react-navigation';


const stackNavigator = StackNavigator({
  Info: { screen: InfoView },
  Settings: {screen: SettingsView },
  Bookmark: {screen: BookmarkView },
  Calendar: {screen: CalendarView},
  Client: {screen: ClientView},
}, {
  headerMode: 'none'
});

const Egi_Backup = DrawerNavigator({
  Stack: {
    screen: stackNavigator
  },
  Home: {
    screen: App,
  }
  
}, {
  contentComponent: DrawerMenu,
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
});

AppRegistry.registerComponent('Egi_Backup', () => Egi_Backup);
