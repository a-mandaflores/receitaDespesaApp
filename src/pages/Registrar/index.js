import { useState } from "react";
import { Background } from "../Login/styles";
import Header from "../../components/Header";
import { Button, ButtonText, Container, Input } from "./styles";
import api from "../../services/api";
import Actions from "../../components/Register";

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
        <Actions onTipoChange={(tipoSelecionado) => setTipo(tipoSelecionado)}></Actions>
        <Button onPress={ handleRegister }>
            <ButtonText>Registrar</ButtonText>
        </Button>
      </Container>
    </Background>
  );
}
