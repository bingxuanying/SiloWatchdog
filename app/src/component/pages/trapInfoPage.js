import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {trapInfoActions} from '../../store/actions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretSquareLeft} from '@fortawesome/free-solid-svg-icons';
import styles from './trapInfoPage.css';

class TrapInfoPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.isLoading === true ? (
          <ActivityIndicator />
        ) : (
          <>
            <View style={styles.head}>
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => this.props.clearCurTrap()}>
                <FontAwesomeIcon
                  icon={faCaretSquareLeft}
                  style={styles.backBtnIcon}
                  size={41}
                />
              </TouchableOpacity>
              <Text style={styles.title}>
                Trap #{this.props.currentTrap.id}
              </Text>
            </View>

            <View style={styles.imgBlock}></View>

            <View style={styles.infoBlock}>
              <View style={styles.infoBar}>
                <View style={styles.infoBarTitle}>
                  <Text style={styles.subtitle}>Insect Count</Text>
                </View>
                <View style={styles.infoBarContent}>
                  <Text style={styles.contentText}>Sample</Text>
                </View>
              </View>

              <View style={styles.infoBar}>
                <View style={styles.infoBarTitle}>
                  <Text style={styles.subtitle}>Trap Location</Text>
                </View>
                <View style={styles.infoBarContent}>
                  <Text style={styles.contentText}>Sample</Text>
                </View>
              </View>

              <View style={styles.infoBar}>
                <View style={styles.infoBarTitle}>
                  <Text style={styles.subtitle}>Temprature</Text>
                </View>
                <View style={styles.infoBarContent}>
                  <Text style={styles.contentText}>Sample</Text>
                </View>
              </View>

              <View style={styles.infoBar}>
                <View style={styles.infoBarTitle}>
                  <Text style={styles.subtitle}>Humidity</Text>
                </View>
                <View style={styles.infoBarContent}>
                  <Text style={styles.contentText}>Sample</Text>
                </View>
              </View>
            </View>
          </>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTrap: state.trapInfo.currentTrap,
    isLoading: state.temp.status.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearCurTrap: trapInfoActions.clearCurTrap,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(TrapInfoPage);
