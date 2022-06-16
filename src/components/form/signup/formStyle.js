import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 25,
    paddingVertical: 50,
    maxWidth: 800,
    marginHorizontal: 'auto',
  },
  error: {
    backgroundColor: 'orange',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
    height: 50,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e50914',
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#e50914',
  },
  subTitle: {
    color: '#000000',
    textAlign: 'left',
    marginBottom: 15,
    fontSize: 24,
    fontWeight: '600',
  },
  text: {
    color: '#000000',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
  },
  input: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    height: 60,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
  },
  inputValid: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    height: 60,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'green',
  },
  inputInvalid: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    height: 60,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'red',
  },
  textInvalid: {
    width: '100%',
    textAlign: 'left',
    color: 'red',
  },
});

export default styles;
