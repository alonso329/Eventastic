import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  FAB
} from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';

const Asistir = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card elevation={2} style={styles.card}>
          <Card.Title subtitle="VIE, JUNIO 10 - 4:00 AM" />
          <Card.Cover
            source={require('../assets/after.jpg')}
            style={styles.cardImage}
          />
          <Card.Content>
            <Title>After party</Title>
            <Paragraph>Boquita</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              color="#fcba03"
              onPress={() => {
                navigation.push('VerMas');
              }}
            >
              VER MÁS
            </Button>
            <Button
              color="#fcba03"
              onPress={() => {
                Alert.alert(
                  'Dejarás de asistir a After party',
                  'Este evento ya no aparecerá en tú perfil'
                );
              }}
            >
              DEJAR DE ASISTIR
            </Button>
          </Card.Actions>
        </Card>
        <Card elevation={2} style={styles.card}>
          <Card.Title subtitle="VIE, JUNIO 8 - 5:00 PM" />
          <Card.Cover
            source={require('../assets/piensaBiblia.jpg')}
            style={styles.cardImage}
          />
          <Card.Content>
            <Title>Lectura de Biblia</Title>
            <Paragraph>Casa de Hegar García</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              color="#fcba03"
              onPress={() => {
                navigation.push('VerMas');
              }}
            >
              VER MÁS
            </Button>
            <Button
              color="#fcba03"
              onPress={() => {
                Alert.alert(
                  'Dejarás de asistir a Lectura de Biblia',
                  'Este evento ya no aparecerá en tú perfil'
                );
              }}
            >
              DEJAR DE ASISTIR
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
};

const Eventos = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Card elevation={2} style={styles.card}>
            <Card.Title subtitle="JUE, JUNIO 20 - 10:00 PM" />
            <Card.Cover
              source={require('../assets/viajeAstral.jpg')}
              style={styles.cardImage}
            />
            <Card.Content>
              <Title>Viaje Astral</Title>
              <Paragraph>Mi cuarto</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button
                color="#fcba03"
                onPress={() => {
                  navigation.push('newEvent');
                }}
              >
                Editar
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.push('newEvent')}
        color="white"
      />
    </View>
  );
};

const initialLayout = { width: Dimensions.get('window').width };

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'black' }}
    activeColor="black"
    inactiveColor="#c9c9c9"
    labelStyle={{ fontWeight: 'bold', fontSize: 18 }}
    style={{ backgroundColor: 'white' }}
  />
);

const Profile = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Asistirás a' },
    { key: 'second', title: 'Tus eventos' }
  ]);

  const renderScene = SceneMap({
    first: Asistir,
    second: Eventos
  });

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header statusBarHeight={50} style={{ backgroundColor: 'white' }}>
        <Appbar.Content title="Diego Contreras" titleStyle={styles.title} />
        <Appbar.Action
          size={50}
          icon={() => (
            <Avatar.Image size={50} source={require('../assets/diego.jpg')} />
          )}
          style={{ marginBottom: 15 }}
          onPress={() => {
            navigation.push('Ajustes');
          }}
        />
      </Appbar.Header>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: 'bold'
  },
  card: {
    marginBottom: 15
  },
  cardImage: {
    height: 130
  },
  fab: {
    position: 'absolute',
    margin: 20,
    backgroundColor: '#fcba03',
    right: 0,
    bottom: 0
  }
});

export default Profile;
