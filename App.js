import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppContextProvider from './context/app_context'

import HomeScreen from './screens/HomeScreen';
import DirectionsScreen from './screens/DirectionsScreen';
import ModeScreen from './screens/ModeScreen';
import GameScreen from './screens/GameScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
            />
          <Stack.Screen 
              name="Directions"
              component={DirectionsScreen}
              options={{
                headerShown: false
              }}
          />
          <Stack.Screen 
              name="Mode"
              component={ModeScreen}
          />
          <Stack.Screen 
              name="Game"
              component={GameScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
