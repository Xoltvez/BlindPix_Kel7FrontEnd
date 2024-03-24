import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import CustomInput from '../Customs/custominput';
import CustomButton from '../Customs/custombutton';
import Styles from '../Styles/style';

const Register = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <View style={{ marginHorizontal: 32, marginVertical: 64 }}>

        <View style={{alignItems: 'center', textAlign: 'center', marginBottom: 80,}}>
          <Text style={Styles.title}>Let’s Get Started!</Text>
          <Text style={Styles.text}>Create your new account right now</Text>
        </View>      

        <View style={{ marginBottom: 80}}>
          <CustomInput ph="Username" />
          <CustomInput ph="Email" />
          <CustomInput ph="Password" />
          <CustomButton
          buttonname={'Register'}
          press={() => navigation.navigate('Home')}
          />
        </View>

        <View style={{ alignItems: 'center'}}>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={Styles.text1}>Have an account?</Text>
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
                onPress={() => navigation.navigate('Login')}>Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>  

      </View>
    </View>
  );
};

export default Register;
