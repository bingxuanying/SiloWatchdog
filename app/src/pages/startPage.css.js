import {StyleSheet} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const StartPageCSS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e4158',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'AppleSDGothicNeo-Bold',
    marginVertical: 30,
    color: '#fff',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
  },
  userBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  userBtnLogin: {
    backgroundColor: '#66dac7',
    padding: 15,
    width: '100%',
  },
  userBtnText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default StartPageCSS;
