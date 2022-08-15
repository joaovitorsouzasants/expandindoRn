import React, {useState} from "react";
import { View, Text, Button } from "react-native";

export default function App() {
  const[nome, setNome]= useState('Matheus');
  
function entrar(){
  setNome('sujeito programador')
}

  return (
    <View style={{alignItems:"center"}}>
      <Button title="Mudar Nome" onPress={entrar}/>
      <Text style={{fontSize: 19}}>{nome}</Text>
    </View >
  );
};


