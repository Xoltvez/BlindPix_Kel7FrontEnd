import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import CustomInput from '../Customs/custominput';
import CustomButton from '../Customs/custombutton';
import Styles from '../Styles/style';

const Login = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <View style={{ marginHorizontal: 32, marginVertical: 64 }}>

        <View style={{alignItems: 'center', textAlign: 'center', marginBottom: 80,}}>
          <Text style={Styles.title}>Hello Again!</Text>
          <Text style={Styles.text}>Welcome back you’ve been missed</Text>
        </View>      

        <View style={{ marginBottom: 160}}>
          <CustomInput ph="Username" />
          <CustomInput ph="Password" />
          <CustomButton
          buttonname={'Sign in'}
          press={() => navigation.navigate('Home')}
          />
        </View>

        <View style={{ alignItems: 'center'}}>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={Styles.text1}>Didn't have an account?</Text>
            <TouchableOpacity>
              <Text style={{
                  marginBottom: 32,
                  color: '#793BC9',
                  fontSize: 16,
                  fontFamily: 'Manrope',
                  fontWeight: '400',
                  marginTop: 30,
                  marginLeft:4
                }}
                onPress={() => navigation.navigate('Register')}>Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>  

      </View>
    </View>
  );
};

export default Login;
