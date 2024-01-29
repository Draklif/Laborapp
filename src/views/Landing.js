import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Pressable,
} from "react-native";
import React from "react";
import WorkCard from "../components/WorkCard";
import Btn from "../components/Btn";
import { MotiView, MotiText } from "moti";

// Lista de trabajos
// Idealmente se haría conexión con BD para extraer esta lista
const jobList = [
  {
    id: 1,
    name: "Belleza",
    img: require("../assets/job-1.jpg"),
    video: require("../assets/job-1.mp4"),
  },
  {
    id: 2,
    name: "Alimentación",
    img: require("../assets/job-2.jpg"),
    video: "",
  },
  {
    id: 3,
    name: "Construcción",
    img: require("../assets/job-3.jpg"),
    video: "",
  },
  {
    id: 4,
    name: "Entretenimiento",
    img: require("../assets/job-4.jpg"),
    video: "",
  },
  {
    id: 5,
    name: "Transporte",
    img: require("../assets/job-5.jpg"),
    video: "",
  },
  {
    id: 6,
    name: "Servicio Doméstico",
    img: require("../assets/job-6.jpg"),
    video: "",
  },
  {
    id: 7,
    name: "Domiciliario",
    img: require("../assets/job-7.jpg"),
    video: "",
  },
  {
    id: 8,
    name: "Entretenimiento para Adultos",
    img: require("../assets/job-8.jpg"),
    video: "",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  header: {
    paddingVertical: 32,
    paddingTop: 54,
    backgroundColor: "#04acec",
    alignItems: "center",
    marginBottom: 20,
  },
  logoContainer: {
    width: 250,
    height: 80,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  jobListContainer: {
    paddingHorizontal: 28,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 32,
    color: "#04acec",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  bannerContainer: {
    borderWidth: 2,
    borderColor: "#04acec",
    backgroundColor: "#98e2ff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  bannerTitle: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333333",
  },
  bannerSubtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#666666",
  },
});

const Landing = () => {
  const handleBannerPress = () => {
    Linking.openURL("https://www.google.com");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/laborapp-1.png")}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Btn type="login"></Btn>
          <Btn type="signup"></Btn>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.bannerContainer,
            pressed && {
              opacity: 0.8,
              transform: [{ scale: 1.05 }],
              transition: "all 1s",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            },
          ]}
          onPress={handleBannerPress}
        >
          <Text style={styles.bannerTitle}>Reforma pensional</Text>
          <Text style={styles.bannerSubtitle}>
            Todo lo que necesitas saber sobre la reforma pensional.
          </Text>
        </Pressable>
        <Text style={styles.titleText}>TRABAJO EN</Text>
        <MotiView
          from={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "timing",
            duration: 350,
          }}
          style={styles.jobListContainer}
        >
          {jobList.map((card) => (
            <WorkCard
              key={card.id}
              name={card.name}
              img={card.img}
              video={card.video}
            ></WorkCard>
          ))}
        </MotiView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landing;
