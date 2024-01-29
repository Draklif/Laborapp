import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../views/Landing';
import LandingVideo from '../views/LandingVideo';
import Login from '../views/Login';
import Survey from '../views/Survey';
import NewUser from '../views/NewUser';
import UnderConstruction from '../views/UnderConstruction';
import Signup from '../views/Signup';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Landing'>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      <Stack.Screen name="LandingVideo" component={LandingVideo} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
      <Stack.Screen name="Survey" component={Survey} options={{headerShown: false}}/>
      <Stack.Screen name="NewUser" component={NewUser} options={{headerShown: false}}/>
      <Stack.Screen name="UnderConstruction" component={UnderConstruction} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default MyStack