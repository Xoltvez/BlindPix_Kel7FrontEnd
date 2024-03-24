import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import CustomButton3 from '../Customs/custombutton3';


const App = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizEnded, setQuizEnded] = useState(false);
  const [answerColor, setAnswerColor] = useState(Array(4).fill('#7077A1'));
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  useEffect(() => {
    axios
      .get('https://db83-2001-448a-40a3-15fc-1d4f-64b4-f0ea-7b0f.ngrok-free.app/api/quizzes/level/2', {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((response) => {
        const quizData = response.data.data.map((item) => ({
          ...item,
          isCorrect: false,
        }));
        setQuiz(quizData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const checkAnswer = (answer, index) => {
    let correctAnswer = '';

    switch (currentQuestion) {
      case 0:
        correctAnswer = 'b';
        break;
      case 1:
        correctAnswer = 'a';
        break;
      case 2:
        correctAnswer = 'd';
        break;
      case 3:
        correctAnswer = 'c';
        break;
      case 4:
        correctAnswer = 'b';
        break;
      case 5:
        correctAnswer = 'a';
        break;
      case 6:
        correctAnswer = 'c';
        break;
      case 7:
        correctAnswer = 'b';
        break;
      case 8:
        correctAnswer = 'a';
        break;
      case 9:
        correctAnswer = 'd';
        break;
      default:
        correctAnswer = quiz[currentQuestion].correct_answer;
    }

    const isCorrect = answer === correctAnswer;

    setSelectedAnswer(answer);

    const newAnswerColor = [...answerColor];
    newAnswerColor[index] = isCorrect ? '#2BF087' : '#ED2424';
    setAnswerColor(newAnswerColor);

    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    setTimeout(() => {
      const resetAnswerColor = [...answerColor];
      resetAnswerColor[index] = '#7077A1';
      setAnswerColor(resetAnswerColor);

      if (currentQuestion + 1 < quiz.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setQuizEnded(true);
      }
    }, 2000);
  };

  if (loading || !quiz.length) {
    return (
      <View
        style={{
          backgroundColor: '',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  const item = quiz[currentQuestion];

  const styles = StyleSheet.create({
    container: {
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      flex: 1
    },

    optionButton: {
      borderRadius: 12,
      padding: 12,
      marginVertical: 12,
      height: 48,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignSelf: 'center',
      width: '80%',
      borderWidth: 1,
    },
    optionText: {
      color: 'rgba(30, 30, 30, 0.72)',
      fontSize: 14,
      fontFamily: 'Manrope',
      fontWeight: '400',
      textAlign: 'left',
      marginTop: 1,
      marginLeft: 12,
    },
    quizText: {
      color: 'rgba(30, 30, 30, 0.72)',
      fontSize: 20,
      fontFamily: 'Manrope',
      fontWeight: '400',
      padding: 20,
      paddingHorizontal: 1,
      textAlign: 'center',
    },
    resultSummary: {
      color: 'rgba(30, 30, 30, 0.72)',
      fontSize: 16,
      fontFamily: 'Manrope',
      fontWeight: '400',
      marginTop: 32
    },
    resultSummary2: {
      color: '#ffffff',
      fontSize: 28,
      fontFamily: 'Manrope',
      fontWeight: '400',
    },
    result: {
      color: '#1e1e1e',
      fontSize: 24,
      fontFamily: 'Manrope',
      fontWeight: '400',
      
    },
   result2: {
      color: 'rgba(30, 30, 30, 0.72)',
      fontSize: 16,
      fontFamily: 'Manrope',
      fontWeight: '400',      
    },
    correctCount: {
      color: '#2BF087',
    },
    incorrectCount: {
      color: '#ED2424',
    },
    countText: {
      color: '#1e1e1e',
      fontSize: 24,
      fontFamily: 'Manrope',
      fontWeight: '400',
      marginTop: 0,
    },
    countText2: {
      color: '#ffffff',
      fontSize: 14,
      fontFamily: 'Manrope',
      fontWeight: '400',
      marginTop: 0,
    },

    outerCircle: {
    padding: 4,
    backgroundColor: '#4E3BC9',
    borderRadius: 1000,
    aspectRatio: 1,
    width: '80%',
    marginTop: 48,
    shadowColor: '#1e1e1e',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 32,
    elevation: 8,
  },

  innerCircle: {
    padding: 4,
    backgroundColor: '#ffffff',
    borderRadius: 1000,
    aspectRatio: 1,
    width: '100%',
  },
  innermostCircle: {
    padding: 32,
    backgroundColor: '#4E3BC9',
    borderRadius: 1000,
    aspectRatio: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  });

  if (quizEnded) {
    const totalScore = correctCount * 20;
    return (
      <View style={styles.container}>
      <View style={{ marginTop: 48}}>
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => navigation.navigate('Home')}>
            <Image
              style={{ width: 32, height: 32, borderColor: '#dddddd', borderRadius: 100, borderWidth: 1, marginRight: 12 }}
              source={require('../../assets/back-icon.png')}
            />
            <Text style={styles.result2}> Back to home</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.outerCircle}>
      <View style={styles.innerCircle}>
        <View style={styles.innermostCircle}>
          <Text style={[styles.resultSummary2, { textAlign: 'center', marginBottom: 12 }]}>Total Score</Text>
          <Text style={[styles.countText2, { fontSize: 96, font: 'Manrope', fontWeight: 'bold', textAlign: 'center' }]}>
            {totalScore}
          </Text>
        </View>
      </View>
      </View>

      <View style={{ borderColor: '#dddddd', borderRadius: 24, borderWidth: 1, paddingVertical: 36, paddingHorizontal: 12, marginHorizontal: 24, marginTop: 48, marginBottom: 80, width: '80%'}}>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 24}}>
            <Image
              style={{ width: 48, height: 48, borderColor: '#4E3BC9', borderRadius: 100, borderWidth: 1, marginRight: 24 }}
              source={require('../../assets/correct-icon.png')}
            />
            <View style={{ }}>
              <Text style={styles.result2}>
                Correct answer
              </Text>
              <Text style={[styles.result, { textAlign: 'center', }]}>
                {correctCount} {''} Questions
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: 48, height: 48, borderColor: '#4E3BC9', borderRadius: 100, borderWidth: 1, marginRight: 24 }}
              source={require('../../assets/incorrect-icon.png')}
            />
            <View style={{ }}>
              <Text style={styles.result2}>
                Incorrect answer
              </Text>
              <Text style={[styles.result, { textAlign: 'center', }]}>
                {incorrectCount} {''} Questions
              </Text>
            </View>
          </View>

      </View>

      <View style={{width: '100%', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: '80%',
          paddingHorizontal: 80,
          paddingVertical: 16,
          backgroundColor: '#4E3BC9',
          borderRadius: 12,
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('QuizRandomMedium')}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Manrope',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Repeat Quiz
        </Text>
      </TouchableOpacity>
      </View>
    </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 48 }}>
      <Text style={[styles.countText2, { paddingHorizontal: 36, paddingVertical: 12,backgroundColor: '#4E3BC9', borderRadius: 24, }]}>
        Pertanyaan {currentQuestion + 1} dari 10 Soal
      </Text>
      </View>
      <Text style={[styles.quizText, { color: '#1e1e1e', fontSize: 20, fontFamily: 'Manrope', fontWeight: 'semibold' }]}>
        {item.question}
      </Text>
      <View style={{aspectRatio: 1, padding: 48, borderWidth: 1, borderRadius: 24, marginTop:32, marginBottom:32 , borderColor: '#dddddd', alignItems: 'center'}}>
      {item.image && <Image style={{width:200, height:200, borderRadius:20, }}source={{uri:item.image}}/>}
      </View>
      {['a', 'b', 'c', 'd'].map((choice, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => checkAnswer(choice, index)}
          style={[
            styles.optionButton,
            {
              backgroundColor: 
                selectedAnswer &&
                selectedAnswer === choice &&
                answerColor[index]
                  ? answerColor[index]
                  : '#f1f1f1',
              borderColor:
                selectedAnswer &&
                selectedAnswer === choice &&
                answerColor[index]
                  ? answerColor[index]
                  : '#dddddd',
            },
          ]}
          disabled={!!selectedAnswer}>
          <Text style={styles.optionText}>{item[choice]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default App;