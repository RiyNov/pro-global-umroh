import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Subject from '../Subject';

import styles from './styles'

const data = [
  {
    title: 'Umroh Regular',
    imagePath: require("../../../../assets/images/umroh_regular.png")
  },
  {
    title: 'Umroh Plus Turki',
    imagePath: require("../../../../assets/images/umroh_turki.png")
  },
  {
    title: 'Umroh Plus Dubai',
    imagePath: require("../../../../assets/images/umroh_dubai.png")
  },
  {
    title: 'Umroh Plus Abu Dhabi',
    imagePath: require("../../../../assets/images/umroh_abu_dhabi.png")
  },
  {
    title: 'Umroh Plus Cairo',
    imagePath: require("../../../../assets/images/umroh_cairo.png")
  },
  {
    title: 'Umroh Plus Aqsa',
    imagePath: require("../../../../assets/images/umroh_aqsa.png")
  },
  {
    title: 'Umroh Ramadhan',
    imagePath: require("../../../../assets/images/umroh_ramadan.png")
  },
  {
    title: 'Umroh VIP',
    imagePath: require("../../../../assets/images/umroh_vip.png")
  },
  {
    title: 'Mono Turkey',
    imagePath: require("../../../../assets/images/mono_turkey.png")
  },
  {
    title: 'Wisata Halal',
    imagePath: require("../../../../assets/images/wisata_halal.png")
  },
]

export default function SubjectGroup({ navigation }) {

  return (
    <View style={styles.container}>
      <FlatList 
        data = {data}
        keyExtractor = {({title}) => title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CategorySelection')}
          >
            <Subject 
              title = {item.title}
              imagePath = {item.imagePath}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}