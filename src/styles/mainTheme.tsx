import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainTextContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  mainText: {
    fontSize: 30,
  },
  cardContainer: {
    margin: 20,
    marginTop: 40,
    borderColor: 'transparent',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    shadowRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    elevation: 20,
  },
  buttonsContainer: {
    padding: 30,
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 80,
    backgroundColor: '#F5BC9F',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
