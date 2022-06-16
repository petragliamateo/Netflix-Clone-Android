/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#000000',
  },
  bodyWhite: {
    height: '100%',
    backgroundColor: '#ffffff',
    color: '#333333',
    fontSize: 16,
  },
  navigate: {
    backgroundColor: '#000000',
  },
  headerSignup: {
    height: 60,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtons: {
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 14,
  },
  headerHome: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerButtonsWhite: {
    color: '#ffffff',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default styles;
