
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './components/NotAuthenticated/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
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
