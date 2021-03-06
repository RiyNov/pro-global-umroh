import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles'

export default function Search({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.subContainer}
            onPress={() => navigation.navigate('Search')}
        >
            <View style={styles.itemGroup}>
                <View>
                    <Image 
                        style={styles.icon}
                        source = {require('../../../../assets/icons/search_grey.png')}
                    />
                </View>
                <View>
                    <Text style={styles.text}>
                        Search by word or ad number
                    </Text>
                </View>
            </View>
            <View style={styles.itemGroup}>
                <Image 
                    style={styles.middleIcon}
                    source = {require('../../../../assets/icons/microphone.png')}
                />
                <Image 
                    style={styles.icon}
                    source = {require('../../../../assets/icons/categorize.png')}
                />
            </View>
        </TouchableOpacity>
    </View>
  );
}