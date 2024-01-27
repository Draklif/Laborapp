import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  video: {
    width: '100%',
    height: '100%'
  },
  transparentBackground: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    flex: 1,
  },
  logo: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 166,
    right: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
});

const LandingVideo = ({route, navigation}) => {
  const { name, video } = route.params;

  const handleContinue = () => {
    navigation.navigate('Survey');
  };

  return (
    <View style={styles.container}>
      {/* <Video
        source={require('../assets/train.mp4')}
        style={styles.video}
        controls
      /> */}

      <Text style={styles.title}>TEST{name}</Text>

      <Image
        source={require('../assets/background.png')}
        style={styles.transparentBackground}
        resizeMode="cover"
      />

      <TouchableOpacity style={styles.floatingButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <Image
        source={require('../assets/laborapp-2.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default LandingVideo