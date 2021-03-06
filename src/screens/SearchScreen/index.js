import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header';

export default function SearchScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Header navigation={navigation} isSearch={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      backgroundColor: 'white',
  },
});