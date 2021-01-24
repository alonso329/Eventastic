import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Alert } from "react-native";
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  FAB,
} from "react-native-paper";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";

const Asistir = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View accessible={true} style={styles.container}>
        <Card accessible={true} elevation={2} style={styles.card}>
          <Card.Title
            accessibilityRole="text"
            accessibilityRole="header"
            subtitle="VIE, JUNIO 10 - 4:00 AM"
          />
          <Card.Cover
            accessibilityRole="image"
            accessibilityLabel="Imagen decorativa del evento"
            source={require("../assets/after.jpg")}
            style={styles.cardImage}
          />
          <Card.Content>
            <Title accessibilityRole="header">After party</Title>
            <Paragraph accessibilityRole="text">Boquita</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              labelStyle={{ fontSize: 22 }}
              accessibilityRole="button"
              accessibilityLabel="Ver mas"
              accessibilityHint="Muestra descripcion del evento"
              color="#a36a00"
              onPress={() => {
                navigation.push("VerMas");
              }}
            >
              VER MÁS
            </Button>
            <Button
              labelStyle={{ fontSize: 22 }}
              accessibilityRole="button"
              accessibilityLabel="Dejar de asistir"
              accessibilityHint="Ya no asistiras al evento"
              color="#a36a00"
              onPress={() => {
                Alert.alert(
                  "Dejarás de asistir a After party",
                  "Este evento ya no aparecerá en tú perfil"
                );
              }}
            >
              DEJAR DE ASISTIR
            </Button>
          </Card.Actions>
        </Card>
        <Card accessible={true} elevation={2} style={styles.card}>
          <Card.Title
            accessibilityRole="text"
            subtitle="VIE, JUNIO 8 - 5:00 PM"
          />
          <Card.Cover
            accessibilityRole="image"
            accessibilityLabel="Imagen decorativa del evento"
            source={require("../assets/piensaBiblia.jpg")}
            style={styles.cardImage}
          />
          <Card.Content>
            <Title accessibilityRole="header">Lectura de Biblia</Title>
            <Paragraph accessibilityRole="text">Casa de Hegar García</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              labelStyle={{ fontSize: 22 }}
              accessibilityRole="button"
              accessibilityLabel="Ver mas"
              color="#a36a00"
              onPress={() => {
                navigation.push("VerMas");
              }}
            >
              VER MÁS
            </Button>
            <Button
              labelStyle={{ fontSize: 22 }}
              accessibilityRole="button"
              accessibilityLabel="Dejar de asistir"
              color="#a36a00"
              onPress={() => {
                Alert.alert(
                  "Dejarás de asistir a Lectura de Biblia",
                  "Este evento ya no aparecerá en tú perfil"
                );
              }}
            >
              DEJAR DE ASISTIR
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
};

const Eventos = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Card accessible={true} elevation={2} style={styles.card}>
            <Card.Title
              accessibilityRole="text"
              subtitle="JUE, JUNIO 20 - 10:00 PM"
            />
            <Card.Cover
              accessibilityRole="image"
              accessibilityLabel="Imagen decorativa del evento"
              source={require("../assets/viajeAstral.jpg")}
              style={styles.cardImage}
            />
            <Card.Content>
              <Title accessibilityRole="header">Viaje Astral</Title>
              <Paragraph accessibilityRole="text">Mi cuarto</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button
                labelStyle={{ fontSize: 22 }}
                accessibilityRole="button"
                accessibilityLabel="Editar"
                accessibilityHint="Pasa a editar la informacion del evento"
                color="#a36a00"
                onPress={() => {
                  navigation.push("newEvent");
                }}
              >
                Editar
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
      <FAB
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Agregar"
        accessibilityHint="Pasa a agregar un nuevo evento"
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.push("newEvent")}
        color="white"
      />
    </View>
  );
};

const initialLayout = { width: Dimensions.get("window").width };

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "black" }}
    activeColor="black"
    inactiveColor="#707070"
    labelStyle={{ fontWeight: "bold", fontSize: 18 }}
    style={{ backgroundColor: "white" }}
  />
);

const Profile = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Asistirás a" },
    { key: "second", title: "Tus eventos" },
  ]);

  const renderScene = SceneMap({
    first: Asistir,
    second: Eventos,
  });

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        accessible={true}
        statusBarHeight={50}
        style={{ backgroundColor: "white" }}
      >
        <Appbar.Content title="Diego Contreras" titleStyle={styles.title} />
        <Appbar.Action
          size={50}
          accessibilityRole="imagebutton"
          accessibilityLabel="Profile image"
          accessibilityHint="Te lleva a ajustes de perfil"
          icon={() => (
            <Avatar.Image size={50} source={require("../assets/diego.jpg")} />
          )}
          style={{ marginBottom: 15 }}
          onPress={() => {
            navigation.push("Ajustes");
          }}
        />
      </Appbar.Header>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: "bold",
  },
  card: {
    marginBottom: 15,
  },
  cardImage: {
    height: 130,
  },
  fab: {
    position: "absolute",
    margin: 20,
    backgroundColor: "#a36a00",
    right: 0,
    bottom: 0,
  },
});

export default Profile;
