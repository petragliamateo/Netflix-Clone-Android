/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inner: {
    maxWidth: 1000,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 22,
  },
  images: {
    width: 250,
    height: 250,
    maxWidth: 'auto',
  },
  item: {
    borderBottomColor: '#222',
    borderBottomWidth: 8,
    padding: 50,
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
