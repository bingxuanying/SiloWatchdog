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
import {withRouter} from 'react-router-native';
import styles from './trapInfoPage.css';

class TrapInfoPage extends Component {
  constructor() {
    super();
    this.handleBackBtn = this.handleBackBtn.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrapData(this.props.currentTrap.id);
  }

  handleBackBtn() {
    this.props.clearCurTrap();
    this.props.history.goBack();
  }

  render() {
    var {id, num, data} = this.props.currentTrap;

    return (
      <SafeAreaView style={styles.container}>
        {num === null ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          <>
            <View style={styles.head}>
              <TouchableOpacity
                style={styles.backBtn}
                onPress={this.handleBackBtn}>
                <FontAwesomeIcon
                  icon={faCaretSquareLeft}
                  style={styles.backBtnIcon}
                  size={41}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Trap #{id}</Text>
            </View>

            <View style={styles.imgBlock}></View>

            <View style={styles.infoBlock}>
              <View style={styles.infoBar}>
                <View style={styles.infoBarTitle}>
                  <Text style={styles.subtitle}>
                    Time{num === 0 ? ' (Latest)' : null}
                  </Text>
                </View>
                <View style={styles.infoBarContent}>
                  <Text style={styles.contentText}>
                    {data[num]
                      ? data[num].timeStamp
                          .substring(0, data[num].timeStamp.lastIndexOf(':'))
                          .replace('T', ' ')
                      : 'Not Available'}
                  </Text>
                </View>
              </View>

              <View style={styles.infoBar}>
                <View style={styles.infoBarTitle}>
                  <Text style={styles.subtitle}>Insect Count</Text>
                </View>
                <View style={styles.infoBarContent}>
                  <Text style={styles.contentText}>
                    {data[num] ? data[num].particleCount : 'Not Available'}
                  </Text>
                </View>
              </View>

              <View style={styles.infoBar}>
                <View style={styles.infoBarTitle}>
                  <Text style={styles.subtitle}>Trap Location</Text>
                </View>
                <View style={styles.infoBarContent}>
                  <Text style={styles.contentText}>
                    {data[num] ? data[num].trapLocation : 'Not Available'}
                  </Text>
                </View>
              </View>

              <View style={styles.infoBar}>
                <View style={styles.infoBarTitle}>
                  <Text style={styles.subtitle}>Temprature</Text>
                </View>
                <View style={styles.infoBarContent}>
                  <Text style={styles.contentText}>
                    {data[num] ? data[num].temperature : 'Not Available'} Celc
                  </Text>
                </View>
              </View>

              <View style={styles.infoBar}>
                <View style={styles.infoBarTitle}>
                  <Text style={styles.subtitle}>Humidity</Text>
                </View>
                <View style={styles.infoBarContent}>
                  <Text style={styles.contentText}>
                    {data[num] ? data[num].humidity + '% RH' : 'Not Available'}
                  </Text>
                </View>
              </View>

              <View style={styles.toolBar}>
                {num === 0 ? (
                  <View style={styles.pageBtn_Disable}>
                    <Text style={styles.pageText_Disable}>Pre</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.pageBtn}
                    onPress={() => this.props.preTrapData()}>
                    <Text style={styles.pageText}>Pre</Text>
                  </TouchableOpacity>
                )}

                {data === null || num === data.length - 1 ? (
                  <View style={styles.pageBtn_Disable}>
                    <Text style={styles.pageText_Disable}>Next</Text>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.pageBtn}
                    onPress={() => {
                      this.props.nextTrapData();
                    }}>
                    <Text style={styles.pageText}>Next</Text>
                  </TouchableOpacity>
                )}
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

const mapDispatchToProps = () => {
  return {
    clearCurTrap: trapInfoActions.clearCurTrap,
    fetchTrapData: trapInfoActions.fetchTrapData,
    preTrapData: trapInfoActions.preTrapData,
    nextTrapData: trapInfoActions.nextTrapData,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps())(TrapInfoPage),
);
