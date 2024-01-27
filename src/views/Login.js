import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react'

const Login = ({ navigation }) => {
  const [emailCedula, setEmailCedula] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validación de campos
    if (!emailCedula || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validación de formato de correo/cédula
    const emailCedulaRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|^\d+$/;
    if (!emailCedula.match(emailCedulaRegex)) {
      alert('Formato de correo/cédula incorrecto.');
      return;
    }

    // Navegación a la pantalla de Landing
    // TODO: Aquí se podría agregar la validación de usuario con la BD
    navigation.navigate('Landing');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.formContainer}>
            <Text style={styles.label}>Correo/Cédula</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su correo o cédula"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setEmailCedula(text)}
              value={emailCedula}
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su contraseña"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              value={password}
            />

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>¿Olvidaste tu clave?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.logoContainer}>
            <Image source={require('../assets/laborapp-3.png')} style={styles.logo} />
            <Text style={styles.logoText}>Laborapp</Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f88434',
    paddingTop: 128
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: '#3e4095',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#04acec',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 48,
  },
  logoText: {
    fontSize: 48,
    color: '#ffffff'
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Login