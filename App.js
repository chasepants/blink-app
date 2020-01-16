import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import socket from 'socket.io-client';
import {socketHandler} from './services/socket_handler';
socket.on('connect', function(){
  alert('Connected to server');
});

export default function App() {
  return (
    <View style={styles.container}>
      <Button   title="Blink" onPress={() => {
        alert('Tapped the button')
      }}/>
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
