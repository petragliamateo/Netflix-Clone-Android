/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 10,
    marginHorizontal: 'auto',
    width: '100%',
    maxWidth: 800,
    flexDirection: 'column',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link: {
    textAlign: 'left',
    color: '#757575',
    marginBottom: 16,
    fontSize: 13,
    maxWidth: 160,
    minWidth: 120,
    flexBasis: '50%',
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 40,
  },
  text: {
    fontSize: 13,
    color: '#757575',
    marginVertical: 24,
  },
});

export default styles;
