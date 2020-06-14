import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput, IconButton } from 'react-native-paper';

const LoginForm = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <View style={styles.header}>
          <IconButton
            icon={() => <FontAwesome name="close" size={40} />}
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}> Iniciar sesión </Text>
        </View>
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
        <View style={styles.checkButton}>
          <IconButton
            icon={props => (
              <Ionicons name="ios-checkmark-circle" size={80} color="#fcba03" />
            )}
            size={45}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'TabNavigator' }]
              });
            }}
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
  header: {
    flexDirection: 'row',
    marginBottom: 30,
    maxWidth: '90%'
  },
  checkButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  textInput: {
    minWidth: '100%',
    maxHeight: 70,
    marginBottom: 40
  },
  iconShadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  title: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 45,
    fontWeight: 'bold'
  }
});

export default LoginForm;
