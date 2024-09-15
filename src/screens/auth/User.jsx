import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {image} from '../../assets/image';
export default function User({navigation}) {
  return (
    <View className="flex-1 bg-primary justify-center items-center">
      <Image source={image?.main} className="w-[180px] h-[180px] " />
      <View className="w-full  h-[220px] justify-evenly items-center bottom-0 absolute bg-white p-2">
        <Text className="text-xl font-suse font-semibold text-center">
          Continue As?
        </Text>
        <View className="flex-row w-full justify-around items-center">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login', {
                user_type: 'customer',
              });
            }}>
            <Image
              source={image?.millennial}
              className="w-[100px] h-[100px] border-2 border-primary object-contain rounded-full"
            />
            <Text className="text-lg font-suse font-semibold text-gray-500 text-center">
              Customer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login', {
                user_type: 'vendor',
              });
            }}>
            <Image
              source={image?.agent}
              className="w-[100px] h-[100px]  border-2 border-primary object-contain rounded-full"
            />
            <Text className="text-lg font-suse font-semibold text-gray-500 text-center">
              Vendor
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
