import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    paddingHorizontal: '24px',
  },
  input: {
    backgroundColor: 'white',
    maxWidth: '500px',
    borderWidth: '0',
    padding: '10px',
    height: 36,
    width: '100%',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#e50914',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    color: 'white',
    paddingHorizontal: '16px',
    borderWidth: '0',
    fontSize: '16px',
    borderRadius: '3px',
  },
  text: {
    color: 'white',
    fontSize: '19.2px',
    textAlign: 'center',
    marginBottom: '15px',
  },
});

export default styles;
