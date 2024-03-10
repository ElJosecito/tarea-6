import React, { useState } from "react";
import { View, Text, Image, TextInput, Button } from "react-native";

const AgeGuess = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [status, setStatus] = useState("");

  const fetchAge = async () => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      const data = await response.json();
      setAge(data.age);
      determineStatus(data.age);
    } catch (error) {
      console.error("Error fetching age:", error);
    }
  };

  const determineStatus = (age) => {
    if (age < 30) {
      setStatus("Joven");
    } else if (age >= 30 && age < 60) {
      setStatus("Adulto");
    } else {
      setStatus("Anciano");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 10 }}>Ingresa un nombre:</Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={setName}
        value={name}
        placeholder="Nombre"
      />
      <Button title="Obtener edad" onPress={fetchAge} />
      {age !== null && (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text>
            La edad estimada de {name} es: {age}
          </Text>
          <Text>Esta persona es: {status}</Text>
          {status === "Joven" && (
            <Image
              style={{ width: 200, height: 200, marginTop: 20 }}
              source={{
                uri: "https://previews.123rf.com/images/jemastock/jemastock1706/jemastock170617565/81009900-ilustraci%C3%B3n-de-vector-de-personaje-joven-estudiante-de-dibujos-animados-de-chico.jpg",
              }}
            />
          )}
          {status === "Adulto" && (
            <Image
              style={{ width: 200, height: 200, marginTop: 20 }}
              source={{
                uri: "https://previews.123rf.com/images/djvstock/djvstock1706/djvstock170612021/80777886-adulto-cara-icono-de-dibujos-animados-ilustraci%C3%B3n-vectorial-dise%C3%B1o-gr%C3%A1fico.jpg",
              }}
            />
          )}
          {status === "Anciano" && (
            <Image
              style={{ width: 200, height: 200, marginTop: 20 }}
              source={{
                uri: "https://previews.123rf.com/images/sararoom/sararoom1302/sararoom130200031/17813702-ilustraci%C3%B3n-de-dibujos-animados-anciano-sentado-banco.jpg",
              }}
            />
          )}

          <Button
            title="Volver a intentar"
            onPress={() => {
              setName("");
              setAge(null);
              setStatus("");
            }}
          />

        </View>
      )}
    </View>
  );
};

export default AgeGuess;
