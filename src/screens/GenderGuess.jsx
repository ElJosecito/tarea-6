import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";

const GenderGuess = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");

  const fetchData = async () => {
    const response = fetch(`https://api.genderize.io?name=${name}`).then(
      (res) => res.json()
    );
    console.log(response);
    setData(response);
  };

  const handleSearch = () => {
    fetchData();
  };

  return (
    <View className="p-3 pt-5">
      <View className="text-center">
        <Text className="text-3xl font-bold">
          Inserta tu nombre para adivinar tu género
        </Text>
      </View>
      <View className="py-10">
        <TextInput
          placeholder="Ingrese un nombre"
          className="border-2 border-gray-500 p-2 rounded-full w-full text-center"
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </View>
      <View className="py-5">
        <Button
          title="Buscar"
          onPress={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-full w-full"
        />
      </View>
      <View>
        {data && data.gender === "male" ? (
          <View className="bg-blue-400 py-10 rounded-full">
            <Text className="text-3xl font-bold text-center text-white">
              Hombre
            </Text>
          </View>
        ) : data && data.gender === "female" ? (
          <View className="bg-pink-400 py-10 rounded-full">
            <Text className="text-3xl font-bold text-center text-white">
              Mujer
            </Text>
          </View>
        ) : (
          <View className="bg-gray-400 py-10 rounded-full">
            <Text className="text-3xl font-bold text-center text-white">
              No se ha encontrado el nombre
            </Text>
          </View>
        )}
      </View>

      <View className="py-10 text-center">
        <Text className="text-3xl font-bold">
          {data ? `Probabilidad: ${Math.round(data.probability * 100)}%` : ""}
        </Text>
      </View>
    </View>
  );
};

export default GenderGuess;
