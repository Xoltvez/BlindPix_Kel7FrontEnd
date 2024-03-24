import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import Styles from '../Styles/style';

const DeleteQuiz = () => {
  const [id, setId] = useState('');
  
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);

    const apiUrl = 'https://db83-2001-448a-40a3-15fc-1d4f-64b4-f0ea-7b0f.ngrok-free.app/api/quizzes/'+id; 
    try {
      const response = await axios.delete(apiUrl, {
       id,
      });

      console.log('Respon:', response.data);

      // Tampilkan pemberitahuan sukses
      Alert.alert('Sukses', 'Data berhasil dihapus!');
    } catch (error) {
      console.error('Error:', error);

      // Tampilkan pemberitahuan gagal
      Alert.alert('Gagal', 'Terjadi kesalahan saat menghapus data. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '', borderRadius: 16, padding: 12, marginTop: 32, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32}}
      onPress={() => navigation.navigate('CreateQuiz')}>
        
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{ width: 48, height: 48, borderRadius: 12, marginRight: 16 }}
          source={require('../../assets/delete-icon.png')}
        />
        <Text style={Styles.title2}>Delete Quiz</Text>
        </View>
        </View>

      <TextInput
        style={styles.input}
        placeholder="Id Quiz"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <TouchableOpacity
        style={{
          width: '100%',
          paddingHorizontal: 80,
          paddingVertical: 16,
          backgroundColor: '#4E3BC9',
          borderRadius: 12,
          justifyContent: 'center',
          marginTop: 16,
        }}
        onPress={handleSave}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Manrope',
            fontWeight: 'semibold',
            textAlign: 'center',
          }}>
          Delete quiz
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator style={styles.loading} size="large" color="blue" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#dddddd'
  },
  loading: {
    marginTop: 16,
  },
});

export default DeleteQuiz;
