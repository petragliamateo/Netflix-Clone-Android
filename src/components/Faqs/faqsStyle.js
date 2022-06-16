/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inner: {
    paddingVertical: 45,
    borderBottomWidth: 8,
    borderBottomColor: '#222',
  },
  item: {
    color: 'white',
    marginBottom: 10,
    width: '100%',
    maxWidth: 800,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
    backgroundColor: '#303030',
    paddingHorizontal: 13,
    paddingVertical: 19,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
  },
  text: {
    color: 'white',
    maxHeight: 1200,
    fontSize: 16,
    lineHeight: 22,
    backgroundColor: '#303030',
    padding: 22,
    maxWidth: 800,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 0,
    marginBottom: 18,
    color: 'white',
    textAlign: 'center',
  },
  hidden: {
    display: 'none',
  },
});

export default styles;
