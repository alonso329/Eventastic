import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput, IconButton } from "react-native-paper";

const Register = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.whiteBox} accessible={true}>
        <View style={styles.header} accessible={true}>
          <IconButton
            icon={(props) => <FontAwesome name="close" size={50} />}
            size={45}
            onPress={() => navigation.goBack()}
            accessibilityRole="imagebutton"
            accessibilityLabel="Cancelar"
            accessibilityHint="Cancelar y volver a Home"
          />
          <Text style={styles.title} accessibilityRole="header">
            {" "}
            Registrarse{" "}
          </Text>
        </View>
        <TextInput
          label="Nombre"
          placeholder="Nombre"
          theme={{ colors: { placeholder: "#3d3d3d" } }}
          value={nombre}
          onChangeText={setNombre}
          type="outlined"
          style={styles.textInput}
          accessibilityLabel="Nombre"
          accessibilityHint="Escribe tu nombre"
        />
        <TextInput
          label="Correo"
          placeholder="Correo"
          theme={{ colors: { placeholder: "#3d3d3d" } }}
          value={correo}
          onChangeText={setCorreo}
          type="outlined"
          style={styles.textInput}
          accessibilityLabel="Correo"
          accessibilityHint="Escribe tu correo electronico"
        />
        <TextInput
          label="Contraseña"
          placeholder="Contraseña"
          theme={{ colors: { placeholder: "#3d3d3d" } }}
          value={password}
          onChangeText={setPassword}
          type="outlined"
          secureTextEntry={true}
          style={styles.textInput}
          accessibilityLabel="Contraseña"
          accessibilityHint="Escribe una contraseña"
        />
        <TextInput
          label="Confirmar contraseña"
          placeholder="Confirmar contraseña"
          theme={{ colors: { placeholder: "#3d3d3d" } }}
          value={rePassword}
          onChangeText={setRePassword}
          type="outlined"
          secureTextEntry={true}
          style={styles.textInput}
          accessibilityLabel="Confirmar contrases"
          accessibilityHint="Vuelve a escribir la contraseña"
        />
        <View style={styles.checkButton} accessible={true}>
          <IconButton
            icon={(props) => (
              <Ionicons name="ios-checkmark-circle" size={80} color="#a36a00" />
            )}
            size={45}
            onPress={() => navigation.push("Confirmacion")}
            style={styles.iconShadow}
            accessibilityLabel="Confirmar"
            accessibilityRole="button"
            accessibilityHint="Guardar informacion y crear cuenta"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcba03",
  },
  iconShadow: {
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  header: {
    marginBottom: 30,
    flexDirection: "row",
  },
  checkButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  textInput: {
    minWidth: "95%",
    maxHeight: 70,
    marginBottom: 40,
  },
  whiteBox: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 25,
    maxWidth: "90%",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 38,
    fontWeight: "bold",
  },
});

export default Register;
