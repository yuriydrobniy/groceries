import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 30
  },
  listItem: {
    height: 60,
    backgroundColor: 'white',
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemText: {
    fontSize: 20,
    paddingLeft: 20,
  },
  iconBox: {
    width: 62,
    borderLeftWidth: 2,
    borderColor: '#dddedf',
    height: '100%',
    backgroundColor: '#e6e7e8',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  icon: {
    fontSize: 30,
    color: '#221f1f',
  },
  iconInactive: {
    color: 'gray',
  },
  swipeIcon: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#e6e7e8',
    borderRightWidth: 2,
    borderColor: '#dddedf'
  },
  header: {
    height: 70,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  headerIcoLeft: {
    position: 'absolute',
    right: 20,
    bottom: 10,
  },
  footer: {
    height: 70,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderColor: '#b2b2b2',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  footerCol: {
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  }

});