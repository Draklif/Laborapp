import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 3,
    paddingHorizontal: 24,
    borderRadius: 128,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#04acec',
    marginLeft: 28
  },
  signupButton: {
    backgroundColor: '#00a859',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8, // Adjust the spacing between icon and text
  },
  loginText: {
    color: '#04acec',
  },
  signupText: {
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: -4,
    left: 12,
    width: 40,
    height: 40
  },
});

const Btn = ({ type }) => {
  const navigation = useNavigation();

  const buttonStyles =
    type === 'login'
      ? styles.loginButton
      : type === 'signup'
      ? styles.signupButton
      : {};

  const textStyles =
    type === 'login'
      ? styles.loginText
      : type === 'signup'
      ? styles.signupText
      : {};

  const buttonBehaviour =
    type === 'login'
      ? () => navigation.navigate('Login')
      : () => navigation.navigate('Login')

  const icon =
    type === 'login' ? (
    <TouchableOpacity onPress={buttonBehaviour}>
      <Image source={require('../assets/user.jpg')} style={styles.icon} />
    </TouchableOpacity>
    ) : null;

  return (
    <>
      { icon }
      <TouchableOpacity style={[styles.button, buttonStyles]} onPress={buttonBehaviour}>
        <Text style={[styles.buttonText, textStyles]}>
          {type === 'login' ? 'Ingresa' : 'Soy Nuevo(a)'}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Btn