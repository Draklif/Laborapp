import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { MotiView, MotiText } from "moti";

const Survey = ({ navigation }) => {
  const [responses, setResponses] = useState({})
  const [isSurveyComplete, setIsSurveyComplete] = useState(false);

  const handleToggle = (questionId, response) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionId]: response
    }))
  }

  const handleSend = () => {
    const allQuestionsAnswered = surveyQuestions.every(question => responses[question.id]);
    setIsSurveyComplete(allQuestionsAnswered);

    if (allQuestionsAnswered) {
      navigation.navigate('UnderConstruction')
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const surveyQuestions = [
    {
      id: 1,
      question: '¿Sabes lo que es una EPS?',
    },
    {
      id: 2,
      question: '¿Sabes lo que es una ARL?',
    },
    {
      id: 3,
      question: '¿Sabes qué es un Fondo de Cesantías?',
    },
    {
      id: 4,
      question: '¿Alguna vez te han informado que figuras en alguno de los anteriores?',
    },
    {
      id: 5,
      question: '¿Has tenido algún empleo de tipo formal en el pasado?',
    },
    {
      id: 6,
      question: '¿En tu trabajo actual realizan algún tipo de descuento en el momento del pago?',
    },
    {
      id: 7,
      question: '¿Sabes qué es un trabajo a destajo?',
    },
    {
      id: 8,
      question: '¿Cumples horario?',
    },
    {
      id: 9,
      question: '¿Te suministran elementos de protección o vestuario para hacer tu trabajo?',
    },
    {
      id: 10,
      question: '¿Sientes que tu salud o vida corren algún riesgo al hacer tu trabajo?',
    },
    {
      id: 11,
      question: '¿Trabajas más de 48 horas semanales?',
    },
    {
      id: 12,
      question: '¿Recibes alimentación y/o alojamiento en tu lugar de trabajo?',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/laborapp-2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.surveyText}>Hola, queremos saber más de ti.</Text>
        <View style={styles.survey}>
          {surveyQuestions.map(question => (
            <MotiView from={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'timing',
              duration: 350,
            }} 
            key={question.id} style={styles.questionContainer}>
              <Text style={styles.questionText}>{question.question}</Text>
              <View style={styles.toggleButtonsContainer}>
                <TouchableOpacity
                  style={[
                    styles.toggleButton,
                    responses[question.id] === 'Yes' && styles.selectedButtonYes,
                  ]}
                  onPress={() => handleToggle(question.id, 'Yes')}
                >
                  <Text style={styles.buttonText}>Sí</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.toggleButton,
                    responses[question.id] === 'No' && styles.selectedButtonNo,
                  ]}
                  onPress={() => handleToggle(question.id, 'No')}
                >
                  <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
              </View>
            </MotiView>
          ))}
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  survey: {
    paddingHorizontal: 24
  },
  surveyText: {
    fontSize: 20,
    paddingHorizontal: 12,
    marginBottom: 48
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  toggleButtonsContainer: {
    flexDirection: 'row',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  selectedButtonYes: {
    backgroundColor: '#4CAF50', // Color de fondo cuando está seleccionado
    borderColor: '#4CAF50', // Color del borde cuando está seleccionado
  },
  selectedButtonNo: {
    backgroundColor: '#ed3237', // Color de fondo cuando está seleccionado
    borderColor: '#ed3237', // Color del borde cuando está seleccionado
  },
  buttonText: {
    fontSize: 14,
    color: '#333',
  },
  logo: {
    alignSelf: 'center',
    width: '100%',
    height: 150,
    marginTop: 16
  },
  sendButton: {
    backgroundColor: '#04acec',
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Survey