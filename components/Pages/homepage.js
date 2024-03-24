import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import Styles from '../Styles/style';

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fafafa', flex: 1 }}>
        <View style={{ marginHorizontal: 32, marginVertical: 64 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ marginBottom: 12 }}>
              <Text style={Styles.title1}>Hello, Conney</Text>
              <Text style={Styles.text1}>Welcome back</Text>
            </View>
            <Image
              style={{ width: 48, height: 48, marginBottom: 12, borderRadius: 100 }}
              source={require('../../assets/avatar-icon.png')}
            />
          </View>

          <View style={{ marginBottom: 12,  }}>
            <Image
            style={{ width: 'auto', height: 'auto', aspectRatio: 16/9,  }}
            resizeMode="contain"
            source={require('../../assets/banner-home.png')}
            />
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={Styles.title2}>Color Blind Test Level</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Easy')}>
              <Image
              style={{ width: 'auto', height: 'auto', aspectRatio: 16/9 }}
              resizeMode="contain"
              source={require('../../assets/banner-easy1.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Medium')}>
              <Image
              style={{ width: 'auto', height: 'auto', aspectRatio: 16/9 }}
              resizeMode="contain"
              source={require('../../assets/banner-medium1.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Hard')}>
              <Image
              style={{ width: 'auto', height: 'auto', aspectRatio: 16/9 }}
              resizeMode="contain"
              source={require('../../assets/banner-hard1.png')}
              />
            </TouchableOpacity>
          </View>


        </View>
        
      </View>
    </ScrollView>
  );
};

export default Home;
