import React, { Component } from 'react';
import {
    ScrollView,
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

export default class ProfileView extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView> 
          <Card style={styles.container}
  title='Egi Samsul Muarif'
  image={require('./basket.png')}>

 
    <Text style={{marginBottom: 10}}>
    No.Telpon : 082316687631 
  </Text>
 
    <Text style={{marginBottom: 10}}>
    Alamat : Tasikmalaya 
  </Text>
  <Button
    icon={{name: 'code'}}
    backgroundColor='#03A9F4'
    fontFamily='Lato'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Perbarui Identitas' />

</Card>  
</ScrollView> 
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#455A64',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});