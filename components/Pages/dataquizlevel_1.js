import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

import { RadioButton } from 'react-native-paper';
import axios from 'axios';

const App = ({navigation}) => {

  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    // memanggil API menggunakan Axios
    axios
      .get('https://db83-2001-448a-40a3-15fc-1d4f-64b4-f0ea-7b0f.ngrok-free.app/api/quizzes/level/1', {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((response) => {
        setQuiz(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


const handleAnswerSelect = (questionId, selectedOption) => {
  const updatedSelectedAnswer = {...selectedAnswer, [questionId]: selectedOption};
  setSelectedAnswer(updatedSelectedAnswer);
}


  const renderItem = ({ item, index}) => {
    
    return (
      <View>
      <View style={styles.all_container_option}>
      <Text style={styles.title}>{index+1}.{item.question}</Text>
      <View style={{alignItems:'center'}}>
           <Image style={{width:240, height:240, marginTop:4, marginBottom:32, borderRadius:12}}source={{uri:item.image}}/>
           </View>
      <RadioButton.Group 
        onValueChange={selectedOption => handleAnswerSelect(item.id, selectedOption)}
        value={selectedAnswer[item.id]}>
        <View style={styles.answer, styles.option}>
        <Text style={styles.answer_option}>{item.a}</Text>
        </View>
        <View style={styles.answer, styles.option}>
        <Text style={styles.answer_option}>{item.b}</Text>
        </View>
        <View style={styles.answer, styles.option}>
        <Text style={styles.answer_option}>{item.c}</Text>
        </View>
        <View style={styles.answer, styles.option}>
        <Text style={styles.answer_option}>{item.d}</Text>
        </View>
        </RadioButton.Group>
        <View style={styles.green_container}>
        <Text style={styles.true_option}>Jawaban {item.key}</Text>
        </View>
        <View style={styles.buttonupdate_submit}>
        <TouchableOpacity style={{
          width: '80%',
          paddingHorizontal: 80,
          paddingVertical: 16,
          backgroundColor: '#4E3BC9',
          borderRadius: 12,
          justifyContent: 'center',
          marginTop: 16,
        }} 
        onPress={() => navigation.navigate('Delete')}>
    
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Manrope',
            fontWeight: 'semibold',
            textAlign: 'center',
          }}>
          Update Quiz
        </Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  option:{
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#dddddd',
    width: "80%",
    marginLeft: 36
  },
 answer:{
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '',
   borderRadius: 12,
   
 },
  all_container_option:{
    gap: 4,
    justifyContent: 'center',
  },
  green_container: {
    backgroundColor: '#2BF087',
    paddingVertical: 16,
    paddingHorizontal: 0,
    borderRadius: 16,
    marginHorizontal: 32,
  },
  title:{
    fontSize: 20,
    marginHorizontal: 40,
    marginVertical: 40,
    fontFamily: 'Manrope',
    color: 'black',
    fontWeight: 'bold'
  },
  flatlist:{
    backgroundColor: 'white'
  },
  button_submit:{
    paddingTop: 20,
    alignItems:'center',
    paddingBottom: 20,
    gap: 10,
  },
  answer_option:{
    color: '#1e1e1e',
    fontSize: 16,
    fontFamily: 'Manrope',
    fontWeight: '400',
    marginLeft: 16
  },
  true_option:{
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Manrope',
    fontWeight: '400',
    marginLeft: 16,
  },
  buttonupdate_submit:{
    paddingTop: 20,
    alignItems:'center',
    paddingBottom: 20,
    gap: 10,
  },
});

  return (
    <ScrollView>
    <View style={styles.loading}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" marginVertical= "40px"/>
      ) : (
        <View style={styles.flatlist}>
          <FlatList
            data={quiz}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        <View style={styles.button_submit}>
        </View>
        </View>
      )}
    </View>
    </ScrollView>
  );
}



export default App;
