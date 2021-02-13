/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';

const Stack = createStackNavigator();

class App extends Component {

  logoTitle = () => {
  return (
    <Image
      style={{width: 40, height: 40}}
      source={require('./src/assets/pics/home_icon.png')}
    />
  )
}

  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
              headerStyle: {
                backgroundColor: '#a4511e'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#f3d612'
              }
            }}  
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Home Screen',
              headerTitle: <this.logoTitle/>
            }}  
          />
          <Stack.Screen 
            name="User"  
            component={UserScreen}
            initialParams={{
              userIdx: 100,
              userName: 'Gildong',
              userLastName: 'Go'
            }}
            options={{
              title: 'User Screen',
              headerStyle: {
                backgroundColor: 'pink'
              },
              headerTintColor: 'red',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'purple'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
 
const styles = StyleSheet.create({
  
});

export default App;
