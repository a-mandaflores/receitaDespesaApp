import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Text, TypeButton } from "./styles";
import { View } from "react-native-web";


export default function Actions({ onTipoChange }) {
  const [tipo, setTipo] = useState("receita");

  const handlePress = (tipoSelecionado) => {
    setTipo(tipoSelecionado);
    onTipoChange?.(tipoSelecionado);
  };

  return (
    <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
      <TypeButton
        isSelected={tipo === "receita"}
        onPress={() => handlePress("receita")}
        style={{
          backgroundColor: tipo === "receita" ? "#fff" : "#eee",
        }}
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
        onPress={() => handlePress("despesa")}
        style={{
          backgroundColor: tipo === "despesa" ? "#fff" : "#eee",
        }}
      >
        <Feather
          name="arrow-down"
          size={20}
          color={tipo === "despesa" ? "red" : "gray"}
        />
        <Text>Despesa</Text>
      </TypeButton>
    </View>
  );
}

