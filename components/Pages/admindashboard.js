import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import Styles from '../Styles/style';

const AdminDb = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fafafa', flex: 1 }}>
        <View style={{ marginHorizontal: 32, marginTop: 64 }}>
          <View style={{ marginBottom: 0 }}>
            <Text style={Styles.title1}>Admin Dahsboard</Text>
          </View>

          <View style={{ marginBottom: 0 }}>
            <Image
            style={{ width: 'auto', height: 'auto', aspectRatio: 16/9 }}
            resizeMode="contain"
            source={require('../../assets/banner-admin.png')}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32}}>
            <Image
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
            source={require('../../assets/banner-users.png')}
            />
            <Image
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
            source={require('../../assets/banner-income.png')}
            />
          </View>

          <View style={{ marginBottom: 16 }}>
            <Text style={Styles.title2}>CRUD Options</Text>
          </View>

          <View style={{ backgroundColor: '#f3f3f3', borderRadius: 24, padding: 16, marginBottom: 64}}>
            <View>

              <TouchableOpacity style={{ backgroundColor: '#fafafa', borderRadius: 16, padding: 12,
              flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}
              onPress={() => navigation.navigate('CreateQuiz')}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                  style={{ width: 48, height: 48, borderRadius: 12, marginRight: 16 }}
                  source={require('../../assets/create-icon.png')}
                  />
                  <Text style={Styles.title2}>Create Quiz</Text>
                </View>
                <View>
                  <Image
                  style={{ width: 48, height: 48, borderRadius: 12, }}
                  source={require('../../assets/next-icon.png')}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#fafafa', borderRadius: 16, padding: 12,
              flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}
              onPress={() => navigation.navigate('ListQuiz')}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                  style={{ width: 48, height: 48, borderRadius: 12, marginRight: 16 }}
                  source={require('../../assets/get-icon.png')}
                  />
                  <Text style={Styles.title2}>Data Quiz</Text>
                </View>
                <View>
                  <Image
                  style={{ width: 48, height: 48, borderRadius: 12, }}
                  source={require('../../assets/next-icon.png')}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#fafafa', borderRadius: 16, padding: 12,
              flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0}} onPress={() => navigation.navigate('DeleteQuiz')}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                  style={{ width: 48, height: 48, borderRadius: 12, marginRight: 16 }}
                  source={require('../../assets/delete-icon.png')}
                  />
                  <Text style={Styles.title2}>Delete Quiz</Text>
                </View>
                <View>
                  <Image
                  style={{ width: 48, height: 48, borderRadius: 12, }}
                  source={require('../../assets/next-icon.png')}
                  />
                </View>
              </TouchableOpacity>

            </View>
          </View>


        </View>
        
      </View>
    </ScrollView>
  );
};

export default AdminDb;
