import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SearchScreen from './src/screens/SearchScreen';
import CategorySelection from './src/screens/CategorySelectionScreeen';
import UserProfile from './src/screens/ProfileScreen';
import Mail from './src/screens/MailScreen';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Drawer.Navigator 
          initialRouteName="Home"
          drawerContentOptions={{
            activeTintColor: 'black',
            activeBackgroundColor: 'white',
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen 
            name="CategorySelection" 
            component={CategorySelection}
            options={{
              drawerLabel: () => null,
              title: null,
              drawerIcon: () => null
            }}
          />
          <Drawer.Screen 
            name="Search" 
            component={SearchScreen}
            options={{
              drawerLabel: () => null,
              title: null,
              drawerIcon: () => null
            }}
          />
          <Drawer.Screen 
            name="UserProfile" 
            component={UserProfile}
            options={{
              drawerLabel: () => null,
              title: null,
              drawerIcon: () => null
            }}
          />
          <Drawer.Screen 
            name="Mail" 
            component={Mail}
            options={{
              drawerLabel: () => null,
              title: null,
              drawerIcon: () => null
            }}
          />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

const statusBarHeight = Constants.statusBarHeight

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0
  },
});

