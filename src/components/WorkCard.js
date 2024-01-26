import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

const WorkCard = ({ name, img }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo} source={img}/>
            <Text>{name}</Text>
        </View>
    );
};

export default WorkCard;
