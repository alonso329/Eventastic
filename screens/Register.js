import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput, IconButton } from 'react-native-paper';

const Register = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <View style={styles.header}>
          <IconButton
            icon={props => <FontAwesome name="close" size={35} />}
            size={26}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}> Registrarse </Text>
        </View>
        <TextInput
          label="Nombre"
          value={nombre}
          onChangeText={setNombre}
          type="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Correo"
          value={correo}
          onChangeText={setCorreo}
          type="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          type="outlined"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <TextInput
          label="Confirmar contraseña"
          value={rePassword}
          onChangeText={setRePassword}
          type="outlined"
          secureTextEntry={true}
          style={styles.textInput}
        />
        <View style={styles.checkButton}>
          <IconButton
            icon={props => (
              <Ionicons name="ios-checkmark-circle" size={80} color="#fcba03" />
            )}
            size={45}
            onPress={() => navigation.push('Confirmacion')}
            style={styles.iconShadow}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcba03'
  },
  iconShadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  header: {
    marginBottom: 30,
    flexDirection: 'row'
  },
  checkButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  textInput: {
    minWidth: '95%',
    maxHeight: 70,
    marginBottom: 40
  },
  whiteBox: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 25,
    maxWidth: '90%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  title: {
    marginTop: 15,
    marginLeft: 10,
    fontSize: 38,
    fontWeight: 'bold'
  }
});

export default Register;
