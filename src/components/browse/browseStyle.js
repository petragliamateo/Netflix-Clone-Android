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
    maxWidth: '800px',
    marginHorizontal: 'auto',
    marginVertical: '50px',
  },
  title: {
    color: '#ffffff',
    fontSize: '20px',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    marginTop: '20px',
    marginHorizontal: '20px',
    display: 'flex',
    maxWidth: '100px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#ffffff',
    fontSize: '12px',
    margin: '5px',
  },
  headerBrowseItems: {
    flex: '0',
    backgroundColor: 'red',
    margin: '15px',
  },
  header: {
    height: '60px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
  },
});

export default styles;
