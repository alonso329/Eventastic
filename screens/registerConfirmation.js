import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconButton } from 'react-native-paper';

const RegisterConfirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteBox}>
        <Text style={styles.title}> ¡Tú cuenta ha sido creada con éxito! </Text>
        <View style={styles.checkButton}>
          <IconButton
            icon={props => (
              <Ionicons name="ios-checkmark-circle" size={80} color="#fcba03" />
            )}
            size={42}
            onPress={() => navigation.navigate('LoginHome')}
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
  title: {
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center',
    maxWidth: '80%'
  },
  whiteBox: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  iconShadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  checkButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'flex-end'
  }
});

export default RegisterConfirmation;
