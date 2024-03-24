import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomButton2 = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: '100%',
          paddingHorizontal: 80,
          paddingVertical: 16,
          backgroundColor: '#ffffff',
          borderColor: '#dddddd',
          borderWidth: 1,
          borderRadius: 12,
          justifyContent: 'center',
        }}
        onPress={props.press}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontFamily: 'Manrope',
            fontWeight: 'semibold',
            textAlign: 'center',
          }}>
          {props.buttonname}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton2;
