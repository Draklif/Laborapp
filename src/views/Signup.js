import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react'

const Signup = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [cedula, setCedula] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Validación de campos
    if (!firstName || !lastName || !phoneNumber || !email || !cedula || !password || !confirmPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validación de formato de correo
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      alert('Formato de correo incorrecto.');
      return;
    }

    // Validación de formato de cédula
    const cedulaRegex = /^\d{6,12}$/;
    if (!cedula.match(cedulaRegex)) {
      alert('Formato de cédula incorrecto.');
      return;
    }

    // Validación de contraseña
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Navegación a la pantalla de Landing
    // TODO: Aquí se podría agregar la validación de usuario con la BD
    navigation.navigate('Landing');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <View style={styles.formContainer}>
          <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su nombre"
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
            />

            <Text style={styles.label}>Apellido</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su apellido"
              onChangeText={(text) => setLastName(text)}
              value={lastName}
            />

            <Text style={styles.label}>Teléfono</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su número de teléfono"
              keyboardType="phone-pad"
              onChangeText={(text) => setPhoneNumber(text)}
              value={phoneNumber}
            />

            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su correo"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />

            <Text style={styles.label}>Cédula</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su número de cédula"
              keyboardType="numeric"
              onChangeText={(text) => setCedula(text)}
              value={cedula}
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su contraseña"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
            />

            <Text style={styles.label}>Confirmar Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirme su contraseña"
              secureTextEntry
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
              <Text style={styles.loginButtonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.logoContainer}>
            <Image source={require('../assets/laborapp-3.png')} style={styles.logo} />
            <Text style={styles.logoText}>Laborapp</Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f88434',
    paddingTop: 128,
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
  loginButton: {
    backgroundColor: '#04acec',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
    color: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Signup