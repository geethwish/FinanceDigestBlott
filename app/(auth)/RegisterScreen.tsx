import { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slices/UserSlice";
import tw from "twrnc";

import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/shared/button/Button";
import ChevronRight from "@/components/shared/svgIcons/ChevronRight";

export default function RegisterScreen({ navigation }: { navigation: NavigationProp<any> }) {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleRegister = () => {
        dispatch(registerUser(name));
        navigation.navigate("Home");
    };

    return (
        <SafeAreaView className="bg-light h-full" >
            <View style={tw`p-6`}>
                <Text style={tw`text-[30px] mb-[36px] font-bold`} className="text-textPrimary">Your legal name</Text>
                <Text className="text-lg text-textSecondary">We need to know a bit about you so that we can create your account.</Text>
                <View className="mt-[36px]">
                    <TextInput
                        style={tw`border p-2 mb-4`}
                        placeholder="First name"
                        onChangeText={setName}
                    />
                    <TextInput
                        style={tw`border p-2 mb-4`}
                        placeholder="Last name"
                        onChangeText={setName}
                    />
                </View>

            </View>

            <View style={tw`p-6`} className="flex justify-end w-full items-end">
                <Button label="Register" icon={<ChevronRight width={12} height={20} />} onPress={handleRegister} variant="icon" />
            </View>

        </SafeAreaView>
    );
}