import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 24,
  },
  input: {
    backgroundColor: 'white',
    maxWidth: 500,
    borderWidth: 0,
    padding: 10,
    height: 36,
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#e50914',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    paddingHorizontal: 16,
    borderWidth: 0,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  text: {
    color: 'white',
    fontSize: 19.2,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default styles;
