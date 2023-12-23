import { Home } from './pages/Home';
import { Register } from './pages/Register';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();


async function isSignedIn() {
  try {
    const username =await AsyncStorage.getItem('User');
    console.log('username:', username);
    if(typeof username !== 'undefined' && username !== null)
    return true;
  else
    return false;
  } catch (error) {
    console.log('Error retrieving username from AsyncStorage:', error);
    return false;
  }
}



function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    async function checkAuthentication() {
      const signedIn =  await isSignedIn();
      setIsAuthenticated(signedIn);
    }
    checkAuthentication();
  }, []);
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Register">
            {(props) => <Register {...props} onLoginSuccess={handleLoginSuccess} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;