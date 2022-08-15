import React from "react";
import { View, Text, Image } from "react-native";

export default function App() {

  return (
    <View>
      <Text>olá mundo</Text>
      <Logo Largura={150} Altura={150} Fulano="Fulano Oliveira"/>
    </View >
  );
};

function Logo(props){
let img = 'https://github.com/joaovitorsouzasants.png';

return(
  <View>
  <Image source={{uri: img}} style={{ width:props.Largura, height:props.Altura}}/>
  <Text>{props.Fulano}</Text>
  </View>
);

};
