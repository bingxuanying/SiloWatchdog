import {StyleSheet} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const TrapLstPageCSS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2e4158',
  },
  trapLst: {
    width: '90%',
    marginTop: 20,
  },
  trapBlock: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  trapContent: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TrapLstPageCSS;
