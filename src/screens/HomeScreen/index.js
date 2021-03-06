import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import HoverButton from './components/HoverButton';
import Search from './components/Search';
import SubjectGroup from './components/SubjectGroup';

import styles from './styles'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title={'Pro Global'}/>
      <Search navigation={navigation}/>
      <SubjectGroup navigation={navigation}/>
      <HoverButton navigation={navigation}/>
    </View>
  );
}