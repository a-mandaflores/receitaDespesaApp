import { useState } from "react";
import { Background } from "../Login/styles";
import Header from "../../components/Header";
import { Button, Container, Input, Text, TypeButton } from "./styles";
import Feather from "react-native-vector-icons/Feather";
import { View } from "react-native";
import api from "../../services/api";


export default function Registrar() {
  const [description, setDescription] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");

  const handleRegister = async () => {
    const dateNow = new Date()
    try{
        await api.post('/receive', {
            description: description,
            value: parseFloat(valor),
            type: tipo,
            date: dateNow.toISOString()
        })

        setDescription("");
        setValor("");
        setTipo("receita");

    }catch(err){
        console.log(err)
    }
  }

  return (
    <Background>
      <Header title="Registrando" />
      <Container>
        <Input
          placeholder="Nome"
          value={description}
          onChangeText={setDescription}
        />
        <Input
          placeholder="Valor"
          keyboardType="numeric"
          value={valor}
          onChangeText={setValor}
        />

        {/* Substituir <div> por <View> */}
        <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
          <TypeButton
            isSelected={tipo === "receita"}
            onPress={() => setTipo("receita")}
            style={{ backgroundColor: tipo === "receita" ? "#fff" : "#eee" }}
          >
            <Feather
                name="arrow-up"
                size={20}
                color={tipo === "receita" ? "green" : "gray"}
            />
            <Text>Receita</Text>
          </TypeButton>

          <TypeButton
            isSelected={tipo === "despesa"}
            onPress={() => setTipo("despesa")}
            style={{ backgroundColor: tipo === "despesa" ? "#fff" : "#eee" }}
          >
            <Feather
                name="arrow-down"
                size={20}
                color={tipo === "receita" ? "green" : "gray"}
            />
            <Text>Despesa</Text>
          </TypeButton>
        </View>

        <Button onPress={ handleRegister }>Registrar</Button>
      </Container>
    </Background>
  );
}
