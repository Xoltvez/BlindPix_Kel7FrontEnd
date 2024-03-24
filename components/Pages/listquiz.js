import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import Styles from '../Styles/style';

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fafafa', flex: 1 }}>
        <View style={{ marginHorizontal: 32, marginVertical: 64 }}>

          <View style={{ marginBottom: 12 }}>
            <Text style={Styles.title1}>Data Quiz Level</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('QuizDataLevel1')}>
              <Image
              style={{ width: 'auto', height: 'auto', aspectRatio: 16/9 }}
              resizeMode="contain"
              source={require('../../assets/banner-easyadmin.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('QuizDataLevel2')}>
              <Image
              style={{ width: 'auto', height: 'auto', aspectRatio: 16/9 }}
              resizeMode="contain"
              source={require('../../assets/banner-mediumadmin.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('QuizDataLevel3')}>
              <Image
              style={{ width: 'auto', height: 'auto', aspectRatio: 16/9 }}
              resizeMode="contain"
              source={require('../../assets/banner-hardadmin.png')}
              />
            </TouchableOpacity>
          </View>


        </View>
        
      </View>
    </ScrollView>
  );
};

export default Home;
