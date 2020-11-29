import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../components/Home";
import HelloWorld from "../components/exercices/HelloWorld";
import CaptureTaps from "../components/exercices/CaptureTaps";
import Custom from "../components/exercices/Custom";
import StatesProps from "../components/exercices/StatesProps";
import Styling from "../components/exercices/Styling";
import Scrollable from "../components/exercices/Scrollable";
import Formulaire from "../components/exercices/Formulaire";
import Listes from "../components/exercices/Listes";
import ApiService from "../components/exercices/ApiService";
import FilesMulti from "../components/exercices/FilesMulti";
import Classe from "../components/exercices/Classe";
import Cycles from "../components/exercices/Cycles";

const Stack = createStackNavigator();

export default function Root () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HelloWorld" component={HelloWorld} />
      <Stack.Screen name="CaptureTaps" component={CaptureTaps} />
      <Stack.Screen name="Custom" component={Custom} />
      <Stack.Screen name="StatesProps" component={StatesProps} />
      <Stack.Screen name="Styling" component={Styling} />
      <Stack.Screen name="Scrollable" component={Scrollable} />
      <Stack.Screen name="Formulaire" component={Formulaire} />
      <Stack.Screen name="Listes" component={Listes} />
      <Stack.Screen name="ApiService" component={ApiService} />
      <Stack.Screen name="FilesMulti" component={FilesMulti} />
      <Stack.Screen name="Classe" component={Classe} />
      <Stack.Screen name="Cycles" component={Cycles} />
    </Stack.Navigator>
  );
};

