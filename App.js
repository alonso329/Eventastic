import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LoginHome from "./screens/LoginHome.js";
import LoginForm from "./screens/LoginForm.js";
import Home from "./screens/Home.js";
import Search from "./screens/Search.js";
import Profile from "./screens/Profile.js";
import Register from "./screens/Register.js";
import RegisterConfirmation from "./screens/registerConfirmation";
import VerMas from "./screens/VerMas.js";
import MusicCategory from "./screens/MusicCategory.js";
import Settings from "./screens/Settings.js";
import newEvent from "./screens/newEvent.js";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginHome"
          component={LoginHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmacion"
          component={RegisterConfirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginForm"
          component={LoginForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "HomeStack") {
            iconName = "home";
          } else if (route.name === "SearchStack") {
            iconName = "search";
          } else if (route.name === "ProfileStack") {
            iconName = "user";
          }

          // You can return any component that you like here!
          return (
            <FontAwesome
              name={iconName}
              size={size}
              color={color}
              accessible={true}
              accessibilityLabel={iconName}
              accessibilityRole="menuitem"
              accessibilityHint={`Navegar a la pagina de ${iconName}`}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "black",
        style: {
          backgroundColor: "#a36a00",
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Inicio"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="VerMas"
        component={VerMas}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Buscar"
        component={Search}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="MusicCategory"
        component={MusicCategory}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="VerMas"
        component={VerMas}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Perfil"
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="VerMas"
        component={VerMas}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Ajustes"
        component={Settings}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="newEvent"
        component={newEvent}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

export default App;
