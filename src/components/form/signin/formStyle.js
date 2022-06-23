import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 25,
    maxWidth: 800,
    marginHorizontal: 'auto',
  },
  error: {
    backgroundColor: 'orange',
  },
  input: {
    backgroundColor: '#333333',
    color: '#ffffff',
    marginBottom: 15,
    height: 60,
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  inputFocus: {
    backgroundColor: '#444444',
    color: '#ffffff',
    marginBottom: 15,
    height: 60,
    width: '100%',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    height: 50,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonValid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    height: 50,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e50914',
    backgroundColor: '#e50914',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  subTitle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 18,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 16,
  },
  textSmall: {
    color: '#757575',
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 12,
  },
});

export default styles;
