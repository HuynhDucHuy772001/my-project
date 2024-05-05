import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ListEvents from './src/Screens/ListEvents';
import Home from './src/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventDetail from './src/Screens/EventDetail';
import Colors from './src/color';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}> 
          <Stack.Screen name="home" component={Home}/>
          <Stack.Screen name="listevents" component={ListEvents}/>
          <Stack.Screen name="eventdetail" component={EventDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 40,
  },
});
