import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import styles from './startPage.css';

class StartPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Silo Watchdog</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.userBtnContainer}>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.userBtnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.userBtnText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default StartPage;
