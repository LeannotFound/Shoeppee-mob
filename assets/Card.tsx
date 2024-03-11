import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { Products } from "./type";
import { products } from "./data";
import { router } from "expo-router";

type CardProps1 = {
  item: Products;
};

const Card = ({ item }: CardProps1) => {
  return (
   

      <View className=" flex-row justify-between space-x-2 px-4 pb-2  bg-slate-100 border-2 border-gray-800">
        <View className="flex-row items-center space-x-2 px-4 pb-2 mx-3 bg-white border-2 border-gray-700" style={{borderColor : 'black', borderWidth : 1, borderStyle: 'solid'}}>
          <View className=" flex-row justify-between border-2 border-gray-800 p-4" style={{paddingLeft :10 , paddingRight:10 }}>
            <Text className="font-medium text-lg mr-8">
            <TouchableOpacity  className="justify-end self-end justify-items-end">
              <Icon.Heart
                className="justify-end self-end justify-items-end"
                height="30"
                width="30"
                stroke="black"
              />
            </TouchableOpacity>
              <View className="">
                <Icon.Star
                  height="20"
                  width="20"
                  stroke="yellow"
                  fill="yellow"
                />
              </View>
              {item.rate}
            </Text>
            
           
          </View>
          <TouchableOpacity
            onPress={() =>
              router.navigate({
                pathname: "/home/[slug]",
                params: { slug: item.slug },
              })
            }
          >
            <View className="flex justify-center">
              <Image height={230} width={230} source={{ uri: item.image }} className="w-full h-full object-cover transition-transform transform hover:scale-105 ease-in-out duration-300"/>
            </View>
          </TouchableOpacity>
          <View className="flex-row space-x-4 mb-1">
              <Text className="font-extrabold text-xl  text-gray-700" style={{color:'black', fontSize : 18, fontWeight: "800", marginLeft: 5}}>
                {item.name}
              </Text>
            </View>

            <View className="justify-center" style={{marginLeft: 5}}>
              <Text className="font-black text-xl text-red-700 mr-5" style={{color:'red', fontSize : 16, fontWeight: "800"}}>
                {item.price}
              </Text>

              <View className="p-4 rounded-full bg-orange-500 ">
                <Icon.Plus height="28" width="28" stroke="white" fill="white" />
              </View>
            </View>
        </View>
      </View>
      
  );
};

export default Card;
