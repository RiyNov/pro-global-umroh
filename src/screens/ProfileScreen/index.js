import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.container}>
        <Header navigation={navigation} title={'User Profile'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      backgroundColor: 'white',
  },
});