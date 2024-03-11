import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../assets/data";
import * as Icon from "react-native-feather";
import { Products } from "../../../assets/type";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { router } from "expo-router";

const product = () => {
  const [count, setCount] = useState(0);

  const onClickHandlerAdd = () => {
    setCount(count + 1);
  };
  const onClickHandlerMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const { slug } = useLocalSearchParams();
  const product = products.find((items) => items.slug === slug);
  if (!product) {
    return <Text>Not Found</Text>;
  }

  return (
    <SafeAreaView className="bg-white-600">
      <>
        <View className="justify-between flex-row mr-5">
          <Pressable onPress={() => router.back()}>
            <View className="p-5 bg-gray-100 rounded-full self-start ml-5">
              <Icon.ArrowLeft
                height="20"
                width="20"
                stroke="black"
                fill="black"
              />
            </View>
          </Pressable>
          <View className="rounded-full self-start ml-2">
            <Icon.Heart height="42" width="42" stroke="black" fill="white" />
          </View>
        </View>

        <View className="drop-shadow-md hover:drop-shadow-xl">
          <Image
            source={{ uri: product.image }}
            alt="shoe"
            width={400}
            height={400}
          />
        </View>
        <View className="justify-center align-center mx-4">
          <View className="flex-row justify-between">
            <Text className="font-bold text-3xl">{product.name}</Text>
            <Text className="font-black text-2xl text-red-500">
              {product.price}
            </Text>
          </View>
          <View className="flex-row justify-between mb-3">
            <Text className="font-semibold text-gray-700 text-lg ">
              {product.brand}
            </Text>
            <Text className="font-black text-lg">
              <View className="">
                <Icon.Star
                  height="20"
                  width="20"
                  stroke="yellow"
                  fill="yellow"
                />
              </View>
              {product.rate}
            </Text>
          </View>
          <Text>{product.description}</Text>
        </View>

        <View className="flex-row justify-between mx-4 mt-5 mb-3">
            <View>
          <Pressable onPress={onClickHandlerMinus} className="bg-white border-2 border-gray-600">
            <Icon.Minus height="24" width="24" stroke="black" fill="black" />
          </Pressable>
          </View>
          <View>
            <Text className="self-center text-2xl text-gray-800">{count}</Text>
          </View>
          <View>
          <Pressable onPress={onClickHandlerAdd} className="bg-white border-2 border-gray-600">
            <Icon.Plus height="24" width="24" stroke="black" fill="black" />
          </Pressable>
          </View>
          <View className="p-5 rounded-full bg-orange-500 mr-5 mb-10">
            <Pressable>
              <Icon.ShoppingCart
                height="28"
                width="28"
                stroke="white"
                fill="white"
              />
            </Pressable>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};

export default product;
