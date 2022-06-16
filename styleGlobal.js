/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#000000',
    color: '#333333',
    fontSize: '16px',
  },
  bodyWhite: {
    height: '100%',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    backgroundColor: '#ffffff',
    color: '#333333',
    fontSize: '16px',
  },
  navigate: {
    backgroundColor: '#000000',
  },
  headerSignup: {
    height: '60px',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
  },
  headerButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtons: {
    marginLeft: '20px',
    fontWeight: '600',
    fontSize: '14px',
  },
  headerHome: {
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
  },
  headerButtonsWhite: {
    color: '#ffffff',
    marginLeft: '20px',
    fontWeight: '600',
    fontSize: '14px',
  },
});

export default styles;
