import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import DetailsScreen from './components/DetailsScreen';
// import HomeScreen from './components/HomeScreen';
import DetailsScreen_2 from './components/DetailsScreen_2';
import HomeScreen_2 from './components/HomeScreen_2';
import { name as appName } from './app.json';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen_2} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen_2} options={{ headerShown: false }} />
        {/* Add screens for TopGain and TopLose here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}