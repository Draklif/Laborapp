import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 48,
    alignItems: "center",
  },
  imageContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#04acec",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
    padding: 4,
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  textContainer: {
    width: 140,
    padding: 8,
    backgroundColor: "#04acec",
    borderRadius: 8,
    alignItems: "center",
  },
  nameText: {
    width: "100%",
    color: '#ffffff',
    textAlign: "center",
  },
});

const WorkCard = ({ name, img, video }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('LandingVideo', { name, video });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.tinyLogo} source={img}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WorkCard;
