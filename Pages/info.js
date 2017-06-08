import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,

  StatusBar,
  Image,
  
  TextInput
} from 'react-native';
import { COLOR, ThemeProvider, Toolbar} from 'react-native-material-ui';
import { Card,  FormLabel, FormInput } from "react-native-elements";
//import Container from '../Container';
//import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { setUser } from './user';
import styles from './styles';
const background = require('./images/shadow.png');


var SERVER_LOGIN_URL = 'http://192.168.43.147/backend/login.php';

//import SignupSection from './keboo/SignupSection';
const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
    accentColor: COLOR.pink500,
  },
  toolbar: {
    container: {
      height: 70,
      paddingTop: 20,
    },
  },
};

export default class InfoView extends Component {
// static propTypes = {
//     setUser: React.PropTypes.func,
//   }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    


   };
 }
    login() {
    // if (this.state.username === '') {
    //   showMessage("Something is bad", "Username cannot be empty");
    //   return;
    // }
    // if (this.state.password === '') {
    //   showMessage("Something is bad", "Password cannot be empty");
    //   return;
    // }
    // this.showProgressBar();
    fetch(SERVER_LOGIN_URL + '?username=' + this.state.username + '&password=' + this.state.password)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          const {navigate}= this.props.navigation;
           navigate('Info');
        //   this.hideProgressBar();
        //   showMessage("Something is bad", "Invalid username and/or password");
         }
         else 
       {
        const {navigate}= this.props.navigation;
           navigate('Home');
            // password: this.state.password,
            // id: id,
            // username: this.state.username
        }  
        
      })
      .done();
  }

// var InfoView = React.createClass({
//   getInitialState: function() {
//     return {
//       username: "",
//       password: "",
//       loading: false,
//     };
//   },


  // setUser(name) {
  //   this.props.setUser(name);
  // }

  
  render() {
    return (
     
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input 
                  placeholder="Username"  text = {this.state.username} 
                  onChangeText = {(e) => this.setState({username: e})} 
                  />
                </Item>
                <Item style={styles.input}>
                  <Icon name="unlock" />
                  <Input
                    placeholder="Password"
                    text = {this.state.password}
                    secureTextEntry
                    onChangeText = {(e) => this.setState({password: e})}
                    
                  />
                </Item>
         <View style={styles.te}>
        
        <Text style={styles.te1}
        onPress={() => this.props.navigation.navigate('Bookmark')}>Create Account</Text>
         
        <Text style={styles.text}
        onPress={() => this.props.navigation.navigate('Client')}>Forgot Password?</Text>
      </View>

                <Button style={styles.btn} 
                onPress={() => this.login()}> 
                  <Text>Login</Text>
                </Button>
                  
      </View>

        
              
            </Image>

          </Content>

        </View>
      </Container>
      
    );
  }
}
// });


function bindActions(dispatch) {
  return {
    setUser: name => dispatch(setUser(name)),
  };
}
