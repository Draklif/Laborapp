import { View, Text, Image, StyleSheet, TouchableOpacity, Button, SafeAreaView, ScrollView } from 'react-native'
import { Video, ResizeMode } from 'expo-av';
import React, {useRef} from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  videoContainer: {
    marginTop: 96,
    width: '100%',
    aspectRatio: 16/9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  video: {
    flex: 1,
  },
  transparentBackground: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    zIndex: -1,
    opacity: 0.75
  },
  logo: {
    alignSelf: 'center',
    width: '100%',
    height: 120,
    marginBottom: 16
  },
  title: {
    position: 'absolute',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    top: 48,
    alignSelf: 'center'
  },
  floatingButton: {
    position: 'absolute',
    top: 340,
    right: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    color: '#ffffff',
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

const LandingVideo = ({route, navigation}) => {
const { name, video } = route.params;
const videoRef = React.useRef();
const [status, setStatus] = React.useState({});

const handleContinue = () => {
  navigation.navigate('Survey');
  videoRef.current.pauseAsync();
};

if (video === "") {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
      <Text style={styles.messageText}>¡Esta página está en construcción!</Text>
      <Text style={styles.messageSubtitleText}>Lamentamos el inconveniente.</Text>
        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => navigation.goBack()} // O utiliza la navegación que desees
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
  );
}

return (
  <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <View style={styles.videoContainer}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>

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
)};

export default LandingVideo