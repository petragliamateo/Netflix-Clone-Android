/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: '24px',
    paddingTop: '50px',
    paddingBottom: '10px',
    marginHorizontal: 'auto',
    width: '100%',
    maxWidth: '800px',
    flexDirection: 'column',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  link: {
    color: '#757575',
    marginBottom: '16px',
    fontSize: '13px',
    maxWidth: '190px',
    minWidth: '120px',
    flexBasis: '50%',
    paddingRight: '12px',
  },
  title: {
    fontSize: '16px',
    color: '#757575',
    marginBottom: '40px',
  },
  text: {
    fontSize: '13px',
    color: '#757575',
    marginVertical: '24px',
  },
});

export default styles;
