import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput, List, Button } from "react-native-paper";
import Ionicon from "react-native-vector-icons/Ionicons";

const newEvent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView accessible={true}>
        <Text style={styles.title} accessibilityRole="header">
          Crea tú evento
        </Text>
        <TextInput
          label="Nombre del evento"
          mode="outlined"
          style={styles.textInput}
          accessibilityLabel="Nombre del evento"
          accessibilityHint="Escribe el nombre del evento"
        />
        <TextInput
          label="Descripción"
          mode="outlined"
          multiline={true}
          numberOfLines={5}
          style={styles.textInput}
          accessibilityLabel="Descripcion"
          accessibilityHint="Escribe la descripcion del evento"
        />
        <View style={styles.rowSection} accessible={true}>
          <List.Accordion
            title="Hora"
            style={[
              {
                minWidth: 110,
              },
              styles.lists,
            ]}
            accessibilityRole="menu"
            accessibilityLabel="Hora"
            accessibilityHint="Escoge una hora para tu evento"
          ></List.Accordion>
          <List.Accordion
            title="PM"
            style={[
              {
                minWidth: 100,
                marginLeft: 10,
              },
              styles.lists,
            ]}
            accessibilityRole="menu"
            accessibilityLabel="AM o PM"
            accessibilityHint="Escoge si tu hora es AM o PM"
          ></List.Accordion>
        </View>
        <View style={styles.rowSection}>
          <List.Accordion
            title="Día"
            style={[
              {
                minWidth: 100,
              },
              styles.lists,
            ]}
            accessibilityRole="menu"
            accessibilityLabel="Dia"
            accessibilityHint="Escoge el dia de tu evento"
          ></List.Accordion>
          <List.Accordion
            title="Mes"
            style={[
              {
                minWidth: 135,
                marginLeft: 10,
              },
              styles.lists,
            ]}
            accessibilityRole="menu"
            accessibilityLabel="Mes"
            accessibilityHint="Escoge el mes de tu evento"
          ></List.Accordion>
          <List.Accordion
            title="Año"
            style={[
              {
                minWidth: 110,
                marginLeft: 10,
              },
              styles.lists,
            ]}
            accessibilityRole="menu"
            accessibilityLabel="Año"
            accessibilityHint="Escoge el año de tu evento"
          ></List.Accordion>
        </View>
        <TextInput
          label="Añadir ubicación"
          mode="outlined"
          style={styles.textInput}
          accessibilityLabel="ubicacion"
          accessibilityHint="Escribe la ubicacion de tu evento"
        />
        <Button
          icon="plus"
          mode="contained"
          style={styles.buttonImage}
          accessibilityRole="button"
          accessibilityLabel="Añadir imagen"
          accessibilityHint="Presiona para añadir una imagen para tu evento"
        >
          Imágen
        </Button>
      </ScrollView>
      <View style={styles.buttonsRow} accessible={true}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => {
            navigation.goBack();
          }}
          accessibilityRole="button"
          accessibilityLabel="Cancelar"
          accessibilityHint="Cancelar creacion del evento y volver a la pagina de tu perfil"
        >
          <Ionicon name="ios-close" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonConfirm, { marginLeft: 15 }]}
          onPress={() => {
            Alert.alert(
              "El evento ha sido creado con éxito",
              "Puedes verlo en tus eventos",
              [
                {
                  text: "OK",
                  onPress: () => {
                    navigation.goBack();
                  },
                },
              ]
            );
          }}
          accessibilityRole="button"
          accessibilityLabel="Confirmar"
          accessibilityHint="Guardar y subir tu evento"
        >
          <Ionicon name="ios-checkmark" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
  },
  textInput: {
    marginBottom: 25,
  },
  rowSection: {
    flexDirection: "row",
    marginBottom: 25,
  },
  lists: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    backgroundColor: "#f9f9f9",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonClose: {
    backgroundColor: "#5c5c5c",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 40,
    elevation: 2,
  },
  buttonConfirm: {
    backgroundColor: "#a36a00",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 40,
    elevation: 2,
  },
  buttonImage: {
    width: 150,
    height: 40,
    borderRadius: 20,
  },
});

export default newEvent;
