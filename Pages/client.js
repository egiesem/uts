import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
 
  StatusBar,
 
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ToastAndroid,
  findNodeHandle
} from 'react-native';
import { COLOR, ThemeProvider, Toolbar} from 'react-native-material-ui';
import { Card,  FormLabel, FormInput } from "react-native-elements";
//import Container from '../Container';
//import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { setUser } from './user';
import styles from './styles';

const uiTheme = {
  palette: {
    primaryColor: COLOR.blue600,
    accentColor: COLOR.pink500,
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20,
    },
  },
};

export default class ClientView extends Component {
static propTypes = {
    setUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  setUser(name) {
    this.props.setUser(name);
  }


  render() {
     return (   

        <View style={styles.container}>
           <ThemeProvider uiTheme={uiTheme}>
        <Container>
          <Toolbar
            leftElement="close"
            onLeftElementPress={() => this.props.navigation.navigate('Info')}
            centerElement="Lupa Password"
          />
          <Content>
           
              <View style={styles.abg}>
                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input placeholder="No. Handphone" onChangeText={name => this.setState({ name })} />
                </Item>
                
         <View style={styles.te}>
        
        <Text style={styles.te1}
        onPress={() => this.props.navigation.navigate('Bookmark')}>Create Account</Text>
         
        <Text style={styles.text}
        onPress={() => this.props.navigation.navigate('Info')}>Sudah Inga Password?</Text>
      </View>

                <Button style={styles.btn} 
                onPress={() => this.props.navigation.navigate('Home')}>
                  <Text>Kirim</Text>
                </Button>
                  
      </View>

        
              
          

          </Content>
                </Container>
                  
      </ThemeProvider>

        </View>

    );
  }
}


function bindActions(dispatch) {
  return {
    setUser: name => dispatch(setUser(name)),
  };
}
