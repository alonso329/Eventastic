import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container} accessible={true}>
        <Text style={styles.title} accessibilityRole="header">
          {" "}
          Inicio
        </Text>
        <Text style={styles.subtitle} accessibilityRole="text">
          Populares cerca de tí
        </Text>
        <Card elevation={2} style={styles.card} accessible={true}>
          <Card.Title subtitle="VIE, JUNIO 05 - 12:00 AM" />
          <Card.Cover
            source={require("../assets/pedaMasiva.jpg")}
            style={styles.cardImage}
            accessibilityRole="image"
            accessibilityLabel="Imagen de evento"
          />
          <Card.Content accessible={true}>
            <Title accessibilityRole="header">Peda masiva</Title>
            <Paragraph accessibilityRole="text">
              Casa de Ulises Magaña
            </Paragraph>
          </Card.Content>
          <Card.Actions accessible={true}>
            <Button
              color="#fcba03"
              onPress={() => {
                navigation.push("VerMas");
              }}
              accessibilityLabel="Ver Más"
              accessibilityRole="button"
              accessibilityHint="Ver más informacion del evento"
            >
              VER MÁS
            </Button>
            <Button
              color="#fcba03"
              onPress={() => {
                Alert.alert(
                  "Asistirás a Peda Masiva",
                  "Este evento ahora aparecerá en tú perfil"
                );
              }}
              accessibilityRole="button"
              accessibilityLabel="Asistir"
              accessibilityHint="Asistir a este evento"
            >
              ASISTIR
            </Button>
          </Card.Actions>
        </Card>
        <Card elevation={2} style={styles.card} accessible={true}>
          <Card.Title subtitle="VIE, JUNIO 10 - 4:00 AM" />
          <Card.Cover
            source={require("../assets/after.jpg")}
            style={styles.cardImage}
            accessibilityRole="image"
            accessibilityLabel="Imagen de evento"
          />
          <Card.Content accessible={true}>
            <Title accessibilityRole="header">After party</Title>
            <Paragraph accessibilityRole="text">Boquita</Paragraph>
          </Card.Content>
          <Card.Actions accessible={true}>
            <Button
              color="#fcba03"
              onPress={() => {
                navigation.push("VerMas");
              }}
              accessibilityLabel="Ver Más"
              accessibilityRole="button"
              accessibilityHint="Ver más informacion del evento"
            >
              VER MÁS
            </Button>
            <Button
              color="#fcba03"
              onPress={() => {
                Alert.alert(
                  "Asistirás a After party",
                  "Este evento ahora aparecerá en tú perfil"
                );
              }}
              accessibilityRole="button"
              accessibilityLabel="Asistir"
              accessibilityHint="Asistir a este evento"
            >
              ASISTIR
            </Button>
          </Card.Actions>
        </Card>
        <Text style={styles.subtitle} accessibilityRole="text">
          Esta tarde
        </Text>
        <Card elevation={2} style={styles.card} accessible={true}>
          <Card.Title subtitle="VIE, JUNIO 8 - 5:00 PM" />
          <Card.Cover
            source={require("../assets/piensaBiblia.jpg")}
            style={styles.cardImage}
            accessibilityRole="image"
            accessibilityLabel="Imagen de evento"
          />
          <Card.Content accessible={true}>
            <Title accessibilityRole="header">Lectura de Biblia</Title>
            <Paragraph accessibilityRole="text">Casa de Hegar García</Paragraph>
          </Card.Content>
          <Card.Actions accessible={true}>
            <Button
              color="#fcba03"
              onPress={() => {
                navigation.push("VerMas");
              }}
              accessibilityLabel="Ver Más"
              accessibilityRole="button"
              accessibilityHint="Ver más informacion del evento"
            >
              VER MÁS
            </Button>
            <Button
              color="#fcba03"
              onPress={() => {
                Alert.alert(
                  "Asistirás a Lectura de Biblia",
                  "Este evento ahora aparecerá en tú perfil"
                );
              }}
              accessibilityRole="button"
              accessibilityLabel="Asistir"
              accessibilityHint="Asistir a este evento"
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
    marginBottom: 15,
  },
  cardImage: {
    height: 130,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});

export default Home;
