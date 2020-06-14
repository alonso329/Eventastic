import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const MusicCategory = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Música</Text>
        <Text style={styles.subtitle}>Esta semana</Text>
        <Card elevation={2} style={styles.card}>
          <Card.Title subtitle="MIE, JUNIO 25 - 8:00 PM" />
          <Card.Cover
            source={require('../assets/banda.jpg')}
            style={styles.cardImage}
          />
          <Card.Content>
            <Title>Garage Band(a)</Title>
            <Paragraph>Garage</Paragraph>
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
                  'Asistirás a Garage Band(a)',
                  'Este evento ahora aparecerá en tú perfil'
                );
              }}
            >
              ASISTIR
            </Button>
          </Card.Actions>
        </Card>
        <Card elevation={2} style={styles.card}>
          <Card.Title subtitle="MIE, JUNIO 25 - 8:00 PM" />
          <Card.Cover
            source={require('../assets/vocaloid.jpg')}
            style={styles.cardImage}
          />
          <Card.Content>
            <Title>Vocaloid</Title>
            <Paragraph>Casa de Hatsune</Paragraph>
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
                  'Asistirás a Vocaloid',
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
    marginBottom: 20,
    textAlign: 'center'
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

export default MusicCategory;
