import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio</Text>
        <Text style={styles.subtitle}>Populares cerca de tí</Text>
        <Card elevation={2} style={styles.card}>
          <Card.Title subtitle="VIE, JUNIO 05 - 12:00 AM" />
          <Card.Cover
            source={require('../assets/pedaMasiva.jpg')}
            style={styles.cardImage}
          />
          <Card.Content>
            <Title>Peda masiva</Title>
            <Paragraph>Casa de Ulises Magaña</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              color="#fcba03"
              onPress={() => {
                navigation.push('VerMas');
              }}
            >
              VER MÁS
            </Button>
            <Button
              color="#fcba03"
              onPress={() => {
                Alert.alert(
                  'Asistirás a Peda Masiva',
                  'Este evento ahora aparecerá en tú perfil'
                );
              }}
            >
              ASISTIR
            </Button>
          </Card.Actions>
        </Card>
        <Card elevation={2} style={styles.card}>
          <Card.Title subtitle="VIE, JUNIO 10 - 4:00 AM" />
          <Card.Cover
            source={require('../assets/after.jpg')}
            style={styles.cardImage}
          />
          <Card.Content>
            <Title>After party</Title>
            <Paragraph>Boquita</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              color="#fcba03"
              onPress={() => {
                navigation.push('VerMas');
              }}
            >
              VER MÁS
            </Button>
            <Button
              color="#fcba03"
              onPress={() => {
                Alert.alert(
                  'Asistirás a After party',
                  'Este evento ahora aparecerá en tú perfil'
                );
              }}
            >
              ASISTIR
            </Button>
          </Card.Actions>
        </Card>
        <Text style={styles.subtitle}>Esta tarde</Text>
        <Card elevation={2} style={styles.card}>
          <Card.Title subtitle="VIE, JUNIO 8 - 5:00 PM" />
          <Card.Cover
            source={require('../assets/piensaBiblia.jpg')}
            style={styles.cardImage}
          />
          <Card.Content>
            <Title>Lectura de Biblia</Title>
            <Paragraph>Casa de Hegar García</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              color="#fcba03"
              onPress={() => {
                navigation.push('VerMas');
              }}
            >
              VER MÁS
            </Button>
            <Button
              color="#fcba03"
              onPress={() => {
                Alert.alert(
                  'Asistirás a Lectura de Biblia',
                  'Este evento ahora aparecerá en tú perfil'
                );
              }}
            >
              ASISTIR
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15
  },
  cardImage: {
    height: 130
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 15
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 20
  }
});

export default Home;
