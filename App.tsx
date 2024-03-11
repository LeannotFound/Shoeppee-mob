import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");

  const numbers = [
    "099090909090",
    "9098020810801",
    "9021210909210",
    "9098020810801",
    "099090909090",
    "9098020810801",
    "9021210909210",
    "9098020810801",
    "9021210909210",
    "9021210909210",
    "099090909090",
    "9098020810801",
    "9021210909210",
    "9098020810801",
    "9021210909210",
  ];
  
  return (
    <View className=" justify-center items-center flex-1">
      <SafeAreaView className="flex-1 bg-green-600 h-full w-full p-10 m-5"></SafeAreaView>
      <Text className="font-black text-2xl mb-3 text-green-600 mt-20">
        MART PADALA
      </Text>
      <Text className="font-bold text-2xl mb-3">{text}</Text>

      <TextInput
        className="border-2 border-grey-400 rounded-md mb-2"
        placeholder="Type your number:"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Pressable>
        <View className="border-2 rounded-sm bg-green-600">
          <Text className="color-white p-2">submit</Text>
        </View>
      </Pressable>

      <Image
        className="h-20 w-40 mt-2"
        source={{
          uri: "https://www.swirlingovercoffee.com/wp-content/uploads/2016/10/Smart-Padala-Logo-600x130.jpg",
        }}
      ></Image>
      <StatusBar style="auto" />

      <FlatList
        data={numbers}
        renderItem={({ item, index }) => (
          <View>
            <Text className="font-bold my-1">{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
