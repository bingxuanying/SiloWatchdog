import {StyleSheet} from 'react-native';

const TrapLstPageCSS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2e4158',
  },
  loading: {
    marginTop: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'AppleSDGothicNeo-Bold',
    marginVertical: 20,
    color: '#fff',
  },
  trapLst: {
    width: '90%',
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
