/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem 
} from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './src/logo';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import PictogramHome from './src/assets/pics/home_icon.png';
import SideDrawer from './src/my_drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props}/>
//       <DrawerItem
//         label="Help"
//         onPress={()=>Linking.openURL('http://www.google.com')}
//         icon={()=><LogoTitle/>}
//       /> 
//       <DrawerItem
//         label="Info"
//         onPress={()=>alert('Info Window')}
//       /> 
//     </DrawerContentScrollView>
//   )
// }

class App extends Component {

//   logoTitle = () => {
//   return (
//     <Image
//       style={{width: 40, height: 40}}
//       source={require('./src/assets/pics/home_icon.png')}
//     />
//   )
// }


  render () {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerType="front"
          drawerPosition='right'
          drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 200
          }}
          drawerContentOptions={{
            activeTintColor: 'red',
            activeBackgroundColor: 'skyblue'
          }}
          drawerContent={props => <SideDrawer {...props} />}
        >
          <Drawer.Screen 
            name="Home" 
            component={DrawerHomeScreen}
            options={{
              drawerIcon: () => (
                <Image
                  source={PictogramHome}
                  style={{width: 40, height: 40}}
                />
              )
            }}
          />
          <Drawer.Screen name="User" component={DrawerUserScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
      // <NavigationContainer>
      //   <Stack.Navigator 
      //     initialRouteName="Home"
      //     screenOptions={{
      //         headerStyle: {
      //           backgroundColor: '#a4511e'
      //         },
      //         headerTintColor: '#fff',
      //         headerTitleStyle: {
      //           fontWeight: 'bold',
      //           color: '#f3d612'
      //         }
      //       }}  
      //   >
      //     <Stack.Screen 
      //       name="Home" 
      //       component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: <LogoTitle/>,
      //         headerRight: () => (
      //           <Button
      //             title="Info"
      //             onPress={()=>alert('I am a button!!')}
      //             color='orange'
      //           />
      //         )
      //       }}  
      //     />
      //     <Stack.Screen 
      //       name="User"  
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 100,
      //         userName: 'Gildong',
      //         userLastName: 'Go'
      //       }}
      //       options={{
      //         title: 'User Screen',
      //         headerStyle: {
      //           backgroundColor: 'pink'
      //         },
      //         headerTintColor: 'red',
      //         headerTitleStyle: {
      //           fontWeight: 'bold',
      //           color: 'purple'
      //         }
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }
}
 
const styles = StyleSheet.create({
  
});

export default App;