import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import { Navigator, NativeModules } from 'react-native';

import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { Toolbar, BottomNavigation, Icon } from 'react-native-material-ui';
import Container from './Container';

import { TabRouter } from 'react-navigation';

import TodayView from './Contents/today';
import ProfileView from './Contents/profile';
import KontakView from './Contents/map';
import ChatView from './Contents/chat';
//import Login from './Pages/SigIns'

const uiTheme = {
  palette: {
    primaryColor: COLOR.blue600,
    accentColor: COLOR.pink500,
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20
    }
  }
}

const TabRoute = TabRouter({
 
  Pengajar: { screen: TodayView },
  Profil: { screen: ProfileView },
  Kontak: { screen: KontakView },
  Obrolan: {screen: ChatView}
  }, {
    initialRouteName: 'Pengajar',
  }
);

class TabContentNavigator extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: props.value.active,
    };
  }

  //this method will not get called first time
  componentWillReceiveProps(newProps){
    this.setState({
      active: newProps.value.active,
    });
  }

  render() {
    const Component = TabRoute.getComponentForRouteName(this.state.active);
    return <Component/>;
  }
}

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: 'Pengajar',
    };
  }

  static navigationOptions = {
    title: 'Menu',
  };

  navigate() {
    this.props.navigation.navigate('DrawerOpen'); // open drawer
  }

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />

          <Toolbar
            leftElement="menu"
            centerElement={this.state.active}
            onLeftElementPress={() => this.navigate()}
          />

          <TabContentNavigator value={this.state} key={this.state} />

          <BottomNavigation active={this.state.active}
            hidden={false}
            style={{ container: { position: 'absolute', bottom: 0, left: 0, right: 0 } }}
          >
            <BottomNavigation.Action
              key="Pengajar"
              icon="today"
              label="Guru"
              onPress={() => this.setState({ active: 'Pengajar' })}
            />
            <BottomNavigation.Action
              key="Profil"
              icon="person"
              label="Profil"
              onPress={() => {
                this.setState({ active: 'Profil' });
              }}
            />
            <BottomNavigation.Action
              key="Kontak"
              icon="people"
              label="Kontak"
              onPress={() => this.setState({ active: 'Kontak' })}
            />
            <BottomNavigation.Action
              key="Obrolan"
              icon="chat"
              label="Obrolan"
              onPress={() => this.setState({ active: 'Obrolan' })}
            />
          </BottomNavigation>

        </Container>
      </ThemeProvider>
    );
  }
}
