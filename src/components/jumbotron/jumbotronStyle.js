/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inner: {
    maxWidth: '1000px',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '28px',
    lineHeight: '1.1',
    marginBottom: '8px',
    fontWeight: '600',
  },
  subTitle: {
    fontSize: '22px',
    fontWeight: 'normal',
    lineHeight: 'normal',
  },
  images: {
    width: '250px',
    height: '250px',
    maxWidth: 'auto',
  },
  item: {
    borderBottomColor: '#222',
    borderBottomWidth: '8px',
    padding: '50px',
    color: 'white',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default styles;
