import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { Appbar, Switch, Button } from 'react-native-paper';

const Settings = ({ navigation }) => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: '#fcba03' }}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
          color="white"
        />
        <Appbar.Content title="Ajustes" color="white" />
      </Appbar.Header>
      <View style={styles.content}>
        <TouchableOpacity>
          <ImageBackground
            source={require('../assets/diego.jpg')}
            style={styles.image}
          >
            <View style={styles.imageView}>
              <Text style={styles.imageText}>Cambiar Imagen</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={{ width: '80%' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text style={styles.labels}>Pausar Notificaciones</Text>
            <Switch
              style={{ marginTop: 25 }}
              value={active}
              onValueChange={() => setActive(!active)}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.labels}>Nombre de Usuario</Text>
          </TouchableOpacity>
          <Text style={styles.subLabels}>Diego Contreras</Text>
          <TouchableOpacity>
            <Text style={styles.labels}>Correo electrónico</Text>
          </TouchableOpacity>
          <Text style={styles.subLabels}>dcontreras12@ucol.mx</Text>
          <TouchableOpacity>
            <Text style={styles.labels}>Cambiar contraseña</Text>
          </TouchableOpacity>

          <Button
            icon="help-circle-outline"
            mode="text"
            onPress={() => console.log('Pressed')}
            style={[styles.textButton, { marginTop: 40 }]}
            color="black"
            labelStyle={styles.buttonLabels}
            uppercase={false}
          >
            Ayuda
          </Button>
          <Button
            icon="exit-to-app"
            mode="text"
            onPress={() => console.log('Pressed')}
            style={styles.textButton}
            color="red"
            labelStyle={styles.buttonLabels}
            uppercase={false}
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
    backgroundColor: 'white'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 15
  },
  image: {
    width: 220,
    height: 220,
    justifyContent: 'flex-end'
  },
  imageView: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10
  },
  imageText: {
    color: 'white'
  },
  labels: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 25
  },
  subLabels: {
    fontSize: 12,
    marginTop: 5,
    color: '#949494'
  },
  textButton: {
    alignSelf: 'flex-start'
  },
  buttonLabels: {
    fontSize: 16
  }
});

export default Settings;
