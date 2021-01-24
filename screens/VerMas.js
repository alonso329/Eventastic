import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const VerMas = ({ navigation }) => {
  return (
    <View accessible={true} style={styles.container}>
      <ImageBackground
        accessibilityRole="image"
        accessibilityLabel="Imagen decorativa del evento"
        source={require("../assets/after.jpg")}
        style={styles.headerImage}
      >
        <View accessible={true} style={styles.header}>
          <Text accessibilityRole="header" style={styles.headerTitle}>
            After Party
          </Text>
          <Text accessibilityRole="text" style={styles.headerDate}>
            VIE, JUNIO 10 - 4:00 AM
          </Text>
        </View>
      </ImageBackground>
      <View accessible={true} style={styles.content}>
        <Text
          accessibilityRole="text"
          style={styles.paragraph}
        >{`Continuación de la fiesta de Ulises en Boquita Ante ac donec metus donec.
Pellentesque pellentesque neque odio nulla dui, tortor nec ligula pede nec imperdiet bibendum, erat mauris praesent magnis, 
nibh vel vivamus in integer ante. Fermentum nascetur venenatis nibh eu, fringilla consequat eget distinctio ac, est 
asperiores hendrerit et metus congue tristique, quis pharetra dictum, at parturient ipsum tincidunt tortor elit nisl.`}</Text>
        <View accessible={true} style={styles.buttonsRow}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Cerrar"
            accessibilityHint="Regresa a la pantalla anterior"
            style={styles.buttonClose}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicon name="ios-close" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Asistir"
            accessibilityHint="Marca como que asistiras al evento"
            style={styles.buttonAssist}
            onPress={() => {
              Alert.alert(
                "Asistirás a After party",
                "Este evento ahora aparecerá en tú perfil"
              );
            }}
          >
            <Text style={styles.buttonText}>ASISTIR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonAssist: {
    backgroundColor: "#a36a00",
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderRadius: 30,
    marginLeft: 15,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#5c5c5c",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 40,
    elevation: 2,
  },
  header: {
    height: "22%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  headerDate: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "justify",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 2,
    padding: 25,
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default VerMas;
