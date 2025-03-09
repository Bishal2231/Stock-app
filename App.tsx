import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Profile from './src/screens/Profile';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">

      <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="Profile" component={Profile} options={{headerStyle:{backgroundColor:"blue"}}} />
         <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <MyTabs/> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});