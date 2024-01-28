import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
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
    video: require("../assets/job-2.mp4"),
  },
  {
    id: 3,
    name: "Construcción",
    img: require("../assets/job-3.jpg"),
    video: require("../assets/job-3.mp4"),
  },
  {
    id: 4,
    name: "Entretenimiento",
    img: require("../assets/job-4.jpg"),
    video: require("../assets/job-4.mp4"),
  },
  {
    id: 5,
    name: "Transporte",
    img: require("../assets/job-5.jpg"),
    video: require("../assets/job-5.mp4"),
  },
  {
    id: 6,
    name: "Servicio Doméstico",
    img: require("../assets/job-6.jpg"),
    video: require("../assets/job-6.mp4"),
  },
  {
    id: 7,
    name: "Domiciliario",
    img: require("../assets/job-7.jpg"),
    video: require("../assets/job-7.mp4"),
  },
  {
    id: 8,
    name: "Entretenimiento para Adultos",
    img: require("../assets/job-8.jpg"),
    video: require("../assets/job-8.mp4"),
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
    backgroundColor: "#DFDFDF", // Cambia el color de fondo según tus preferencias
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333333", // Cambia el color del título según tus preferencias
  },
  bannerSubtitle: {
    fontSize: 16,
    color: "#666666", // Cambia el color del subtítulo según tus preferencias
  },
});

const Landing = () => {
  const handleBannerPress = () => {
    Linking.openURL("https://www.google.com"); // Cambia la URL según tu requisito
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
        <TouchableOpacity
          style={styles.bannerContainer}
          onPress={handleBannerPress}
        >
          <Text style={styles.bannerTitle}>Reforma pensional</Text>
          <Text style={styles.bannerSubtitle}>
            Todo lo que necesita saber sobre la reforma pensional.
          </Text>
        </TouchableOpacity>
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
