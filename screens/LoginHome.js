import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;

const LoginHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <View style={styles.icon}>
          <FontAwesome name="hand-peace-o" size={200} color="black" />
          <Text style={styles.iconText}>Eventos Colima</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Register');
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>REGISTRARSE</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.push('LoginForm');
            }}
          >
            <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'TabNavigator' }],
            });
          }}
        >
          <Text>Ir a home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcba03',
  },
  icon: {
    marginBottom: 40,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: '#fcba03',
    padding: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginVertical: 12,
    borderRadius: 30,
    height: 50,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  whiteBox: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    padding: 50,
    borderRadius: 25,
    maxWidth: '85%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  iconText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default LoginHome;
