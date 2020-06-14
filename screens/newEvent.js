import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { TextInput, List, Button } from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';

const newEvent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Crea tú evento</Text>
        <TextInput
          label="Nombre del evento"
          mode="outlined"
          style={styles.textInput}
        />
        <TextInput
          label="Descripción"
          mode="outlined"
          multiline={true}
          numberOfLines={5}
          style={styles.textInput}
        />
        <View style={styles.rowSection}>
          <List.Accordion
            title="Hora"
            style={[
              {
                minWidth: 110
              },
              styles.lists
            ]}
          ></List.Accordion>
          <List.Accordion
            title="PM"
            style={[
              {
                minWidth: 100,
                marginLeft: 10
              },
              styles.lists
            ]}
          ></List.Accordion>
        </View>
        <View style={styles.rowSection}>
          <List.Accordion
            title="Día"
            style={[
              {
                minWidth: 100
              },
              styles.lists
            ]}
          ></List.Accordion>
          <List.Accordion
            title="Mes"
            style={[
              {
                minWidth: 135,
                marginLeft: 10
              },
              styles.lists
            ]}
          ></List.Accordion>
          <List.Accordion
            title="Año"
            style={[
              {
                minWidth: 110,
                marginLeft: 10
              },
              styles.lists
            ]}
          ></List.Accordion>
        </View>
        <TextInput
          label="Añadir ubicación"
          mode="outlined"
          style={styles.textInput}
        />
        <Button icon="plus" mode="contained" style={styles.buttonImage}>
          Imágen
        </Button>
      </ScrollView>
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicon name="ios-close" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonConfirm, { marginLeft: 15 }]}
          onPress={() => {
            Alert.alert(
              'El evento ha sido creado con éxito',
              'Puedes verlo en tus eventos',
              [
                {
                  text: 'OK',
                  onPress: () => {
                    navigation.goBack();
                  }
                }
              ]
            );
          }}
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
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 15
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 15
  },
  textInput: {
    marginBottom: 25
  },
  rowSection: {
    flexDirection: 'row',
    marginBottom: 25
  },
  lists: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: '#f9f9f9'
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  buttonClose: {
    backgroundColor: '#5c5c5c',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 40,
    elevation: 2
  },
  buttonConfirm: {
    backgroundColor: '#fcba03',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 40,
    elevation: 2
  },
  buttonImage: {
    width: 150,
    height: 40,
    borderRadius: 20
  }
});

export default newEvent;
