import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles'

export default function Header({navigation, title, isSearch}) {

    if (isSearch) {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <TouchableOpacity 
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image 
                                style={styles.icon}
                                source = {require('../../assets/icons/burger_menu.png')}
                            />
                    </TouchableOpacity>
                    <View style={styles.itemGroup}>
                        <Image
                            style={styles.searchIcon} 
                            source = {require('../../assets/icons/search_white.png')}
                        />
                        <View style={styles.inputContainer}>
                            <TextInput 
                                style={styles.inputText}
                                placeholder = {'Search'}
                                placeholderTextColor = '#b3b3b3'
                            />
                        </View>
                  </View>
                </View>
            </View>
        )
    } else {
        return (
          <View style={styles.container}>
              <View style={styles.subContainer}>
                  <TouchableOpacity 
                      onPress={() => navigation.openDrawer()}
                  >
                    <Image 
                        style={styles.icon}
                        source = {require('../../assets/icons/burger_menu.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.titleContainer}>
                      <Text style={styles.title}>
                          {title}
                      </Text>
                  </View>
              </View>
      
              <View>
                  <View style={styles.subContainer}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Mail')}
                      >
                        <Image 
                            style={styles.icon}
                            source = {require('../../assets/icons/mail.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('UserProfile')}
                      >
                        <Image 
                            style={styles.middleIcon}
                            source = {require('../../assets/icons/people.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image 
                            style={styles.icon}
                            source = {require('../../assets/icons/camera.png')}
                        />
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
        )
    }


}

