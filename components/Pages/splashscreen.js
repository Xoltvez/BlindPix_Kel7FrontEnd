import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Landing');
    },2500); 
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/purple-icon.png')}
          style={styles.logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4E3BC9',
  },
  logo: {
    width: 100,
    height: 100,
    
  },
});

export default SplashScreen;