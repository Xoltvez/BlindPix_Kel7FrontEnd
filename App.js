import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SplashScreen from './components/Pages/splashscreen';
import Landing from './components/Pages/landingpage';
import Login from './components/Pages/loginpage';
import AdminLogin from './components/Pages/adminlogin';
import Register from './components/Pages/registerpage';
import Home from './components/Pages/homepage';
import Easy from './components/Pages/easypage';
import Medium from './components/Pages/mediumpage';
import Hard from './components/Pages/hardpage';
import QuizEasy from './components/Pages/quizeasypage';
import QuizMedium from './components/Pages/quizmedium';
import QuizHard from './components/Pages/quizhard';
import AdminDb from './components/Pages/admindashboard';
import CreateQuiz from './components/Pages/createquiz';
import DeleteQuiz from './components/Pages/deletequiz';
import ListQuiz from './components/Pages/listquiz';
import QuizRandomEasy from './components/Pages/quizrandomeasy';
import QuizRandomMedium from './components/Pages/quizrandommedium';
import QuizRandomHard from './components/Pages/quizrandomhard';
import QuizDataLevel1 from './components/Pages/dataquizlevel_1';
import QuizDataLevel2 from './components/Pages/dataquizlevel_2';
import QuizDataLevel3 from './components/Pages/dataquizlevel_3';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminLogin"
          component={AdminLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Easy"
          component={Easy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Medium"
          component={Medium}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hard"
          component={Hard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizEasy"
          component={QuizEasy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizMedium"
          component={QuizMedium}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizHard"
          component={QuizHard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminDb"
          component={AdminDb}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateQuiz"
          component={CreateQuiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DeleteQuiz"
          component={DeleteQuiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListQuiz"
          component={ListQuiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizRandomEasy"
          component={QuizRandomEasy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizRandomMedium"
          component={QuizRandomMedium}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizRandomHard"
          component={QuizRandomHard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizDataLevel1"
          component={QuizDataLevel1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizDataLevel2"
          component={QuizDataLevel2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizDataLevel3"
          component={QuizDataLevel3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/*
<Stack.Screen name="Landing" component={Landing} options={{headerShown: false,}}/>
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{headerShown: false,}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false,}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
        <Stack.Screen name="Easy" component={Easy} options={{headerShown: false,}}/>
        <Stack.Screen name="Medium" component={Medium} options={{headerShown: false,}}/>
        <Stack.Screen name="Hard" component={Hard} options={{headerShown: false,}}/>
        <Stack.Screen name="QuizEasy" component={QuizEasy} options={{headerShown: false,}}/>
        <Stack.Screen name="QuizMedium" component={QuizMedium} options={{headerShown: false,}}/>
*/
