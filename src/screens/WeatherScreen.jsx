import { View, Text, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";

//axios
import axios from "axios";

const WeatherScreen = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=18.4338742&lon=68.9658701&appid=75ed08e4fef9dacf5f362e03f772cb54`
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <View className="px-3 pt-5 flex-1 bg-sky-500">
      {weather && (
        <>
          <Text className="text-3xl font-bold text-center text-white">
            Weather
          </Text>
          <View className="flex-1 items-center">
            <View className="bg-white p-5 rounded-md my-5">
              <Text className="text-lg font-bold">
                {weather.weather[0].description}
              </Text>
              <Image
                source={{
                  uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
                }}
                style={{ width: 200, height: 200 }}
              />
              <Text className="text-lg font-bold">{weather.main.temp}°C</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default WeatherScreen;
