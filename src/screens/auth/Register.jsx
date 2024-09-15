import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Register({navigation, route}) {
  const [data, setData] = React.useState({
    full_name: '',
    mobile_number: '',
    user_type: route?.params?.user_type,
  });
  return (
    <View className=" bg-primary/20 flex-1 justify-evenly items-center">
      <SafeAreaView className="w-full h-full justify-evenly space-y-8 items-center">
        <View className="flex-row justify-evenly items-center w-full">
          <View className="w-[25%] h-[1px] bg-black" />
          <View className="w-[60px] h-[60px] rounded-full border-2 " />
          <View className="w-[25%] h-[1px] bg-black" />
        </View>
        <KeyboardAwareScrollView className="w-full self-center space-y-10">
          <View className="self-center w-[88%%]">
            <Text className="text-4xl font-suse font-semibold text-left w-[88%] text-gray-800">
              Register
            </Text>
            <Text className="text-xl font-suse font-semibold text-left w-[88%] text-gray-800">
              Let's continue the Journey!
            </Text>
          </View>

          <View className="w-[88%] bg-white h-[400px] self-center items-center justify-evenly shadow-lg">
            <View className="w-[92%] self-end">
              <Text className="text-base font-suse font-medium text-left w-[100%] text-gray-800">
                Name
              </Text>
              <TextInput
                keyboardType="ascii-capable"
                placeholder="Jhon Doe"
                className="border-b-2 font-suse h-[40px] text-xl border-gray-800"
                value={data.full_name}
                onChangeText={text => setData({...data, full_name: text})}
              />
            </View>
            <View className="w-[92%] self-end">
              <Text className="text-base font-suse font-medium text-left w-[100%] text-gray-800">
                Phone
              </Text>
              <TextInput
                keyboardType="number-pad"
                maxLength={10}
                placeholder="9123456789"
                className="border-b-2 h-[40px] tracking-widest font-suse text-xl border-gray-800"
                value={data.mobile_number}
                onChangeText={text => setData({...data, mobile_number: text})}
              />
            </View>
            <TouchableOpacity className="bg-black w-[88%] h-[50px] shadow-lg rounded-md justify-center items-center">
              <Text className="text-base font-suse font-medium  text-white">
                Send OTP
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
}
