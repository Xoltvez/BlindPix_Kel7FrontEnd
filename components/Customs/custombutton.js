import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: '100%',
          paddingHorizontal: 80,
          paddingVertical: 16,
          backgroundColor: '#4E3BC9',
          borderRadius: 12,
          justifyContent: 'center',
        }}
        onPress={props.press}>
        <Text
          style={{
            color: 'white',
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

export default CustomButton;
