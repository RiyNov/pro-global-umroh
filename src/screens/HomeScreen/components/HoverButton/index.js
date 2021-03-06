import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function HoverButton({navigation}) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('CategorySelection')}
    >
      <Image 
          style={styles.icon}
          source={require('../../../../assets/images/whatsapp.png')}
      />
    </TouchableOpacity>
  );
}