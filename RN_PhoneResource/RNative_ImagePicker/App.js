/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

class App extends Component {
  state = {
    avatar: ''
  }

  /* 실행 X */
  // addImage = () => {
  //   ImagePicker.launchCamera({}, response=>{
  //     this.setState({
  //       avatar: response.uri
  //     })
  //   })
  // }
  
  addImage = () => {
    launchCamera({}, response => {
        console.warn(response)
        this.setState({
          avatar: response.uri
        })
    })
  }

  seeImage = () => {
    launchImageLibrary({}, response => {
        console.warn(response)
        this.setState({
          avatar: response.uri
        })
    })
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Image
          source={{uri:this.state.avatar}}
          style={styles.avatar}
        />

        <Button
          title="Add an Image"
          onPress={()=>this.addImage()}
          // onPress={this.addImage}
        />

        <Button
          title="See an Image"
          onPress={()=>this.seeImage()}
          // onPress={this.seeImage}
        />
      </View>
    )
  }
}
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4ab26'
  },
  avatar: {
    width: '100%',
    height: 400
  }
});

export default App;