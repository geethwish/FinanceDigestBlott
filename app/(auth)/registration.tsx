
import { View, Text, KeyboardAvoidingView } from "react-native";
import { useDispatch } from "react-redux";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from "@/components/shared/button/Button";
import ChevronRight from "@/components/shared/svgIcons/ChevronRight";
import InputField from "@/components/shared/form/InputField";
import { registerUser } from "../../store/slices/UserSlice";
import { router } from 'expo-router'

export default function RegisterScreen() {
    const dispatch = useDispatch();

    const signupValidationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
    });

    const handleRegister = async (values: any) => {
        // save submitted values to redux store
        dispatch(registerUser(values));
        router.push('/notification')
    };

    return (
        <SafeAreaView className="bg-light h-full">
            <KeyboardAvoidingView className="flex" >
                <Formik
                    initialValues={{ firstName: '', lastName: '', }}
                    validationSchema={signupValidationSchema}
                    onSubmit={handleRegister}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={tw`p-6`}>
                                <Text style={tw`text-[30px] mb-[36px] font-bold`} className="text-textPrimary font-robotoSans">Your legal name</Text>
                                <Text className="text-lg text-textSecondary font-robotoSans">We need to know a bit about you so that we can create your account.</Text>

                                <View className="mt-[36px]">
                                    <InputField
                                        value={values.firstName}
                                        onChangeText={handleChange('firstName')}
                                        placeholder="First name"
                                        name="firstName"
                                        onBlur={handleBlur('firstName')}
                                        error={errors.firstName}
                                        touched={touched.firstName}
                                    />
                                    <InputField
                                        value={values.lastName}
                                        onChangeText={handleChange('lastName')}
                                        placeholder="Last name"
                                        name="lastName"
                                        onBlur={handleBlur('lastName')}
                                        error={errors.lastName}
                                        touched={touched.lastName}
                                    />
                                </View>


                            </View><View style={tw`p-6`} className="flex justify-end w-full items-end mt-[110px]">
                                <Button label="Register" icon={<ChevronRight width={12} height={20} />} onPress={() => handleSubmit()} variant="icon" disabled={values.firstName === '' || values.lastName === ''} />
                            </View></>

                    )}
                </Formik>

            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}