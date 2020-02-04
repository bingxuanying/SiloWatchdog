import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './startPage.css';
import {connect} from 'react-redux';
import {tempActions} from '../../store/actions';
import {withRouter} from 'react-router-native';

class StartPage extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.props.proceedLogin();
    this.props.history.push('/Lst');
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
          <SafeAreaView style={styles.container}>
            <View>
              <Text style={styles.title}>Silo Watchdog</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={text => this.props.updateLoginUsr(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={text => this.props.updateLoginPassword(text)}
              secureTextEntry
            />
            <View style={styles.userBtnContainer}>
              <TouchableOpacity
                style={styles.userBtnLogin}
                onPress={this.handleLogin}>
                <Text style={styles.userBtnText}>Login</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.userBtn}>
                    <Text style={styles.userBtnText}>Signup</Text>
                  </TouchableOpacity> */}
            </View>

            {/* <View>
                  <Text>Not user yet</Text>
                  <TouchableOpacity>
                    <Text>Signup</Text>
                  </TouchableOpacity>
                </View> */}
          </SafeAreaView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    username: state.temp.loginInfo.username,
    password: state.temp.loginInfo.password,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLoginUsr: tempActions.updateLoginUsr,
    updateLoginPassword: tempActions.updateLoginPassword,
    proceedLogin: tempActions.proceedLogin,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps())(StartPage),
);
