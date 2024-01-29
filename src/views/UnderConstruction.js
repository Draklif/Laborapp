import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'space-between',
    },
    transparentBackground: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      zIndex: -1,
      opacity: 0.75
    },
    messageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    messageText: {
      fontSize: 20,
      textAlign: 'center',
      color: '#333333',
    },
    messageSubtitleText: {
      fontSize: 14,
      textAlign: 'center',
      color: '#555555',
    },
    returnButton: {
      marginTop: 16,
      backgroundColor: '#4CAF50',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    returnButtonText: {
      color: '#ffffff',
    },
  });

const UnderConstruction = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
      <Text style={styles.messageText}>¡Esta página está en construcción!</Text>
      <Text style={styles.messageSubtitleText}>Lamentamos el inconveniente.</Text>
        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => navigation.navigate('Landing')}
        >
          <Text style={styles.returnButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/background.png')}
        style={styles.transparentBackground}
        resizeMode="cover"
      />
    </View>
  )
}

export default UnderConstruction