import { View, Text, Image } from "react-native";
import React from "react";

const ContactMeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold">Contact Me</Text>
      <View className="flex-1 items-center">
        <View className="bg-white p-5 rounded-md my-5">
          <Text className="text-lg font-bold">
            Email: josemartinezflorimon@gmail.com
          </Text>
          <Text className="text-lg font-bold">Phone: 809-555-5555</Text>
          <Text className="text-lg font-bold">
            Address: Santo Domingo, Dominican Republic
          </Text>
          <Image
            source={require("../assets/Josecito.png")}
            
            style={{ width: 200, height: 200 }}
          />
        </View>
      </View>
    </View>
  );
};

export default ContactMeScreen;
