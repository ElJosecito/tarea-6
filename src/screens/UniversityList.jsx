import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Linking,
} from "react-native";

const UniversityList = () => {
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async () => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="my-5 text-lg font-bold">Ingresa un país en inglés:</Text>
      <TextInput
        className="border-2 border-gray-500 p-2 rounded-full text-center w-60 my-5"
        onChangeText={setCountry}
        value={country}
        placeholder="País"
      />
      <Pressable
        className="bg-blue-500 text-white p-2 rounded-full px-5 py-3"
        onPress={fetchUniversities}
      >
        <Text className="text-white font-bold ">Buscar universidades</Text>
      </Pressable>

      <ScrollView className="my-10 w-full" >
        {universities.map((university, index) => (
          <View key={index} className="mx-2 border rounded-md py-4 px-2 my-3">
            <View>
              <Text className="text-lg font-bold">{university.name}</Text>
            </View>
            <Text>Dominio: {university.domains}</Text>
            <Pressable
            className="bg-blue-500 text-white p-2 rounded-full px-5 py-3 mt-3"
              onPress={() => openLink(university.web_pages[0])}
              
            >
              <Text className="text-white font-bold text-center">Ver página web</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UniversityList;
