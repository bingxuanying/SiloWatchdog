import {StyleSheet} from 'react-native';

const TrapInfoPageCSS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2e4158',
  },
  loading: {
    marginTop: '50%',
  },
  head: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontFamily: 'AppleSDGothicNeo-Bold',
    color: '#fff',
    marginLeft: 20,
    marginTop: 3,
  },
  backBtn: {
    marginLeft: 20,
    height: 35,
    width: 35,
    backgroundColor: '#66dac7',
    overflow: 'hidden',
    borderRadius: 4,
  },
  backBtnIcon: {
    marginTop: -3,
    marginLeft: -3,
    color: '#66dac7',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },

  imgBlock: {
    height: 280,
    width: 280,
    borderRadius: 140,
    backgroundColor: '#fff',
    marginBottom: 40,
  },

  infoBlock: {
    width: '90%',
  },
  infoBar: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 10,
  },
  infoBarTitle: {
    width: '40%',
    padding: 10,
    paddingLeft: 25,
    backgroundColor: '#66dac7',
  },
  infoBarContent: {
    width: '60%',
    padding: 10,
    paddingLeft: 25,
    backgroundColor: '#fff',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'AppleSDGothicNeo-Bold',
    color: '#2e4158',
  },
  contentText: {
    fontSize: 15,
    fontFamily: 'AppleSDGothicNeo-Bold',
    color: '#000',
  },
  toolBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  pageBtn: {
    width: '30%',
    padding: 10,
    backgroundColor: '#66dac7',
    borderRadius: 3,
  },
  pageText: {
    fontSize: 15,
    fontFamily: 'AppleSDGothicNeo-Bold',
    color: '#2e4158',
    textAlign: 'center',
  },
  pageBtn_Disable: {
    width: '30%',
    padding: 10,
    backgroundColor: '#abb8c3',
    borderRadius: 3,
  },
  pageText_Disable: {
    fontSize: 15,
    fontFamily: 'AppleSDGothicNeo-Bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default TrapInfoPageCSS;
