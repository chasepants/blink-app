import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import socket from 'socket.io-client';
// import {SocketHandler} from './services/socket_handler';
import io from 'socket.io-client/dist/socket.io';



export default class App extends React.Component{
  state ={
    socket: null
  }

  componentDidMount(){
    socket = io('https://damp-river-33545.herokuapp.com/');
    this.setState({socket})
  }

  render(){
    return (
      <View style={styles.container}>
        <Button title='Blink' onPress={()=>{
          this.state.socket.emit('stateChanged', true);
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
