import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import WorkCard from "../components/WorkCard";
import Btn from "../components/Btn";

const jobList = [
  { id: 1, name: "Belleza", img: require('../assets/amazon-prime_tkn.png') },
  { id: 2, name: "Alimentación", img: require('../assets/amazon-prime_tkn.png') },
  { id: 3, name: "Construcción", img: require('../assets/amazon-prime_tkn.png') },
  { id: 4, name: "Entretenimiento", img: require('../assets/amazon-prime_tkn.png') },
  { id: 5, name: "Transporte", img: require('../assets/amazon-prime_tkn.png') },
  { id: 6, name: "Servicio Doméstico", img: require('../assets/amazon-prime_tkn.png') },
];

const Landing = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View>
                <Text>laborapp</Text>
            </View>
            <View>
                <Btn type='login'></Btn>
                <Btn type='signup'></Btn>
            </View>
            <View>
                <Text>TRABAJO EN</Text>
                {jobList.map((card) => (
                <WorkCard key={card.id} name={card.name} img={card.img}></WorkCard>
                ))}
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landing;
