import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
    height: '100%',
    width: '100%',
    maxWidth: 800,
    marginHorizontal: 'auto',
    marginVertical: 50,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    marginTop: 20,
    marginHorizontal: 20,
    display: 'flex',
    maxWidth: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#ffffff',
    fontSize: 12,
    margin: 5,
  },
  headerBrowseItems: {
    flex: 0,
    backgroundColor: 'red',
    margin: 15,
  },
  header: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
});

export default styles;
