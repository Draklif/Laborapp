import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import WorkCard from "../components/WorkCard";
import Btn from "../components/Btn";

// Lista de trabajos
// Idealmente se haría conexión con BD para extraer esta lista
const jobList = [
  { id: 1, name: "Belleza", img: require('../assets/icon.png') },
  { id: 2, name: "Alimentación", img: require('../assets/job-2.jpg') },
  { id: 3, name: "Construcción", img: require('../assets/job-3.jpg') },
  { id: 4, name: "Entretenimiento", img: require('../assets/job-4.jpg') },
  { id: 5, name: "Transporte", img: require('../assets/job-5.jpg') },
  { id: 6, name: "Servicio Doméstico", img: require('../assets/job-6.jpg') },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  header: {
    paddingVertical: 32,
    paddingTop: 54,
    backgroundColor: '#04acec',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    width: 250,
    height: 80
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  jobListContainer: {
    paddingHorizontal: 28,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 32,
    color: '#04acec',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4
  },
});

const Landing = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/laborapp-1.png')}/>
              </View>
            </View>
            <View style={styles.buttonContainer}>
                <Btn type='login'></Btn>
                <Btn type='signup'></Btn>
            </View>
            <Text style={styles.titleText}>TRABAJO EN</Text>
            <View style={styles.jobListContainer}>
                {jobList.map((card) => (
                  <WorkCard key={card.id} name={card.name} img={card.img}></WorkCard>
                ))}
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landing;
