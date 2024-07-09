import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="w-full items-center justify-between flex flex-row">
      <Pressable className="w-10 h-10 bg-white items-center flex justify-center rounded-full">
        <Ionicons name="menu" size={24} color={"#121212"} />
      </Pressable>
      <View className="flex flex-col items-center justify-center text-white">
        <Text>Localização</Text>
        <View className="flex flex-row items-center gap-2">
          <Feather name="map-pin" size={16} color={"#FF000"} />
          <Text className="font-bold text-lg">Inajar de souza</Text>
        </View>
      </View>
      <Pressable className="w-10 h-10 bg-white items-center flex justify-center rounded-full">
        <Feather name="bell" size={24} color={"#121212"} />
      </Pressable>
    </View>
  );
};

export default Header;
