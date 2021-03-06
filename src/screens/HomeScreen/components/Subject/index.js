import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'

export default function Subject({title, imagePath}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image 
          style={styles.icon}
          source={imagePath}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title} >{title}</Text>
        <Image 
          style={styles.arrow}
          source = {require('../../../../assets/icons/arrow_right.png')}
        />
      </View>
    </View>
  );
}