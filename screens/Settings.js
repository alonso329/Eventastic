import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Appbar, Switch, Button } from "react-native-paper";

const Settings = ({ navigation }) => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "#fcba03" }} accessible={true}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
          color="white"
          size={35}
          accessibilityLabel="Volver"
          accessibilityRole="button"
          accessibilityHint="Volver a la pagina anterior"
        />
        <Appbar.Content
          title="Ajustes"
          color="white"
          accessibilityRole="header"
        />
      </Appbar.Header>
      <View style={styles.content} accessible={true}>
        <TouchableOpacity
          accessibilityRole="imagebutton"
          accessibilityLabel="Imagen de perfil"
          accessibilityHint="Escoge una nueva imagen de perfil"
        >
          <ImageBackground
            source={require("../assets/diego.jpg")}
            style={styles.image}
          >
            <View style={styles.imageView}>
              <Text style={styles.imageText}>Cambiar Imagen</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={{ width: "80%" }} accessible={true}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            accessible={true}
          >
            <Text style={styles.labels} accessibilityRole="text">
              Pausar Notificaciones
            </Text>
            <Switch
              style={{
                marginTop: 25,
                transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
                width: 60,
                height: 48,
              }}
              value={active}
              onValueChange={() => setActive(!active)}
              accessibilityRole="switch"
              accessibilityLabel="Switch de pausar notificaciones"
              accessibilityHint="Activalo para pausar las notificaciones de la app"
            />
          </View>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Nombre de usuario"
            accessibilityHint="Presiona para editar tu nombre de usuario"
          >
            <Text style={styles.labels}>Nombre de Usuario</Text>
          </TouchableOpacity>
          <Text style={styles.subLabels} accessibilityRole="text">
            Diego Contreras
          </Text>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Correo Electronico"
            accessibilityHint="Presiona para editar tu correo electronico"
          >
            <Text style={styles.labels}>Correo electrónico</Text>
          </TouchableOpacity>
          <Text style={styles.subLabels} accessibilityRole="text">
            dcontreras12@ucol.mx
          </Text>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Cambiar contraseña"
            accessibilityHint="Presiona para cambiar tu contraseña"
          >
            <Text style={styles.labels}>Cambiar contraseña</Text>
          </TouchableOpacity>

          <Button
            icon="help-circle-outline"
            mode="text"
            onPress={() => console.log("Pressed")}
            style={[styles.textButton, { marginTop: 40 }]}
            color="black"
            labelStyle={styles.buttonLabels}
            uppercase={false}
            accessibilityRole="button"
            accessibilityLabel="Ayuda"
            accessibilityHint="Navegar a la pagina de ayuda"
            labelStyle={{ fontSize: 22 }}
          >
            Ayuda
          </Button>
          <Button
            icon="exit-to-app"
            mode="text"
            onPress={() => console.log("Pressed")}
            style={styles.textButton}
            color="#c90000"
            labelStyle={styles.buttonLabels}
            uppercase={false}
            accessibilityRole="button"
            accessibilityLabel="Cerrar sesion"
            accessibilityHint="Cierra tu sesion y vuelve a la pagina de inicio"
            labelStyle={{ fontSize: 22 }}
          >
            Cerrar Sesión
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 220,
    height: 220,
    justifyContent: "flex-end",
  },
  imageView: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
  },
  imageText: {
    color: "white",
  },
  labels: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 25,
  },
  subLabels: {
    fontSize: 12,
    marginTop: 5,
    color: "#595959",
  },
  textButton: {
    alignSelf: "flex-start",
  },
  buttonLabels: {
    fontSize: 16,
  },
});

export default Settings;
