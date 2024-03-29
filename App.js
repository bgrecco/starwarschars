import React from 'react';
import {View} from 'react-native';
import AppStyle from './styles/App.style';
import Header from './components/Header';
import CharacterCardList from './components/CharacterCardList';
import CharacterCardDetails from './components/CharacterCardDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={AppStyle.container}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}>
          <Stack.Screen name="CharacterCardList" component={CharacterCardList} />
          <Stack.Screen name="CharacterDetails" component={CharacterCardDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
