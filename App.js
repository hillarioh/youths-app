import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Home';
import BibleScreen from './components/Bible';
import AnnounceScreen from './components/Announce';
import DutyScreen from './components/Duty';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Bible Study"
          component={BibleScreen}
          options={{title: 'Bible study'}}
        />
        <Stack.Screen
          name="Announcement"
          component={AnnounceScreen}
          options={{title: 'Announcements'}}
        />
        <Stack.Screen
          name="Duty roster"
          component={DutyScreen}
          options={{title: 'Duty Roaster'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
