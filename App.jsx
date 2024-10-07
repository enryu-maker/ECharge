import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './src/navigation/AuthNav';
import { Provider } from 'react-redux';
import { store } from './Store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNav />
      </NavigationContainer>
    </Provider>
  );
}
