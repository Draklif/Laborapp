import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const NewUser = ({ navigation }) => {
  const handleNavigateToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ATENCIÓN</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textContent}>
          Esta aplicación tiene como objetivo brindar una información precisa a los millones de personas que laboran de manera informal y que no tienen facilidad para conocer sus derechos al formar parte muy importante de la economía activa de este país.
        </Text>
        <Text style={styles.textContent}>No solamente encontrarán información, además podrán obtener asesoría profesional para poder resolver sus inquietudes y proceder adecuadamente en cualquier situación que tengan o que hayan tenido en lugares de trabajo anteriores.
        </Text>
        <Text style={styles.textContent}>Laborapp también da información sobre los deberes del empleado lo que también hace que se convierta en una herramienta útil para los generadores de trabajo.
        </Text>
      </View>
      <TouchableOpacity style={styles.logoButton} onPress={handleNavigateToSignup}>
        <Text>Ingresa</Text>
        <Image source={require('../assets/laborapp-3.png')} style={styles.logo} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50', // Fondo verde
    padding: 16,
  },
  header: {
    marginTop: 128,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 12,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    marginTop: 20,
    flex: 1,
  },
  textContent: {
    textAlign: 'center',
    margin: 16,
    fontSize: 16,
    color: '#fff',
  },
  logoButton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    gap: 16,
    bottom: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
  },
  logo: {
    width: 64,
    height: 64,
  },
});

export default NewUser