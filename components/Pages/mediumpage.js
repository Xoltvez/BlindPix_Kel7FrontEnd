import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import Styles from '../Styles/style';
import CustomButton3 from '../Customs/custombutton3';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Medium = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fafafa', flex: 1 }}>
        <View style={{ marginBottom: 12 }}>

          <View style={{ position: 'absolute' }}>
            <Image
            style={{ width: screenWidth, height: 'auto', aspectRatio: 16/9 }}
            resizeMode="contain"
            source={require('../../assets/banner-medium2.png')}
            />
          </View>

          <View style={{ position: 'absolute', marginLeft: 32, marginTop: 48 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
              style={{ width: 48, height: 48 }}
              source={require('../../assets/back-icon.png')}
              />
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ backgroundColor: '#ffffff', flex: 1, marginTop: 180, borderRadius: 24 }}>
          
          <View style={{ marginHorizontal: 32, marginVertical: 32 }}>
            <View style={{ marginBottom: 20}}>
              <Text style={Styles.title1b}>Medium Level Test</Text>
              <Text style={Styles.text1}>Estimated time 20 mins</Text>
            </View>

            <View style={{ marginBottom: 48 }}>
              <Text style={Styles.textp}>A medium-level color blindness test evaluates color discrimination skills at a moderate difficulty. Participants are required to identify and differentiate colors presented in various patterns or images. This test offers a comprehensive evaluation of color vision abilities</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 32}}>
              <Image
              style={{ width: 64, height: 64, borderRadius: 100 }}
              source={require('../../assets/question-icon.png')}
              />

              <View style={{ marginLeft: 12 }}>
                <Text style={Styles.text1}>Question Total</Text>
                <Text style={Styles.title2}>10 Questions</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 200 }}>
              <Image
              style={{ width: 64, height: 64, borderRadius: 100 }}
              source={require('../../assets/score-icon.png')}
              />

              <View style={{ marginLeft: 12 }}>
                <Text style={Styles.text1}>Score Minimum</Text>
                <Text style={Styles.title2}>20 Points</Text>
              </View>
            </View>

            <View style={{ marginBottom: 20 }}>
              <CustomButton3
              buttonname={'Start now'}
              press={() => navigation.navigate('QuizMedium')}
              />
            </View>
          </View>

        </View>
        
      </View>
    </ScrollView>
  );
};

export default Medium;
