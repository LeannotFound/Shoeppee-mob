import React from "react";
import {
  View,
  TextInput,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import Card from "../../assets/Card";
import { Products } from "../../assets/type";
import { products } from "../../assets/data";

type CardProps1 = {
  item: Products[];
};


const index = ({ item }: CardProps1) => {
  return (
    <SafeAreaView className="bg-white-600">
      <View className="flex-row justify-end items-center space-x-3  px-4 pb-1">
        <View className="p-2 rounded-full bg-white-600 shadow-inner">
          <Icon.Grid height="20" width="20" stroke="orange" fill="orange" />
        </View>
        <View className="p-6 rounded-full bg-gray-100 self-end"></View>
      </View>

      <View className="flex-row items-center space-x-2 px-4 pb-2 bg-white mt-1">
        <View className="flex-row  items-center p-3 rounded-xl border border-gray-300 my-5">
          <Icon.Search height="22" width="22" stroke="gray" />
          <TextInput
            placeholder="Search your shoes, brands and store"
            className="ml-2"
          ></TextInput>
        </View>
        <View className="p-3 rounded-lg bg-orange-600 my-5">
          <Icon.Sliders
            height="22"
            width="22"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>
      <View className="flex justify-center items-center ">
      <FlatList
      contentContainerStyle ={{gap:10}}
        data={products}
        renderItem={({ item, index }) => 
          <Card
           item={item}
          />
        }
        keyExtractor={(item) => item.id.toString()}
/>
       
      </View>
    </SafeAreaView>
  );
};

export default index;

 