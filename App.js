import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Home from './src/screen/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
        <Home />
    </SafeAreaProvider>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
