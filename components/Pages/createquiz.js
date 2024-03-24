import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';
import axios from 'axios';
import Styles from '../Styles/style';

const CreateQuiz = () => {
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const [key, setKey] = useState('');
  const [levelId, setLevelId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);

    const apiUrl = 'https://db83-2001-448a-40a3-15fc-1d4f-64b4-f0ea-7b0f.ngrok-free.app/api/quizzes'; 
    try {
      const response = await axios.post(apiUrl, {
        question,
        image,
        a,
        b,
        c,
        d,
        key,
        levelId,
      });

      console.log('Respon:', response.data);

      // Tampilkan pemberitahuan sukses
      Alert.alert('Sukses', 'Data berhasil disimpan!');
    } catch (error) {
      console.error('Error:', error);

      // Tampilkan pemberitahuan gagal
      Alert.alert('Gagal', 'Terjadi kesalahan saat menyimpan data. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{ backgroundColor: '#ffffff', borderRadius: 16, padding: 12, marginTop: 32, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}
      onPress={() => navigation.navigate('CreateQuiz')}>
        
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{ width: 48, height: 48, borderRadius: 12, marginRight: 16 }}
          source={require('../../assets/create-icon.png')}
        />
        <Text style={Styles.title2}>Create Quiz</Text>
        </View>
        </View>

      <TextInput
        style={styles.input}
        placeholder="Question"
        value={question}
        onChangeText={(text) => setQuestion(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Image"
        value={image}
        onChangeText={(text) => setImage(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Option A"
        value={a}
        onChangeText={(text) => setA(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Option B"
        value={b}
        onChangeText={(text) => setB(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Option C"
        value={c}
        onChangeText={(text) => setC(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Option D"
        value={d}
        onChangeText={(text) => setD(text)}
      />
      <TextInput
        style={styles.input} 
        placeholder="Key Answer"
        value={key}
        onChangeText={(text) => setKey(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Level"
        value={levelId}
        onChangeText={(text) => setLevelId(text)}
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
          Create quiz
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator style={styles.loading} size="large" color="#4E3BC9" />}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ffffff'
  },
  input: {
    backgroundColor: '#fafafa',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#dddddd'
  },
  loading: {
    marginTop: 80,
  },
});

export default CreateQuiz;
