import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './trapLstPage.css';
import {connect} from 'react-redux';
import {trapInfoActions} from '../../store/actions';
import {withRouter} from 'react-router-native';

class TrapLstPage extends Component {
  componentDidMount() {
    this.props.fetchTrapLst();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.trapLst === null && this.props.isLoading === false ? (
          <Text style={styles.title}>No Trap Available</Text>
        ) : (
          <>
            <Text style={styles.title}>Trap ID List</Text>
            {this.props.isLoading === true ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                style={styles.trapLst}
                data={this.props.trapLst}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.trapBlock}
                    onPress={() => {
                      this.props.updateCurTrap(item);
                      this.props.history.push('/Info');
                    }}>
                    <Text style={styles.trapContent}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.toString()}
              />
            )}
          </>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.plan[0].home);
  return {
    isLoading: state.temp.status.isLoading,
    trapLst: state.trapInfo.trapLst,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrapLst: trapInfoActions.fetchTrapLst,
    updateCurTrap: trapInfoActions.updateCurTrap,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps())(TrapLstPage),
);
