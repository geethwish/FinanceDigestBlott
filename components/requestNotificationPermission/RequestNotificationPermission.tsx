import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Button from "../shared/button/Button";
import { router } from 'expo-router'

const RequestNotificationPermission = () => {
    const [permissionStatus, setPermissionStatus] = useState<Notifications.PermissionStatus | null>(null);

    useEffect(() => {
        checkPermission();
    }, []);

    const checkPermission = async () => {
        const { status } = await Notifications.getPermissionsAsync();
        setPermissionStatus(status);
    };

    const showCustomAlert = () => {
        Alert.alert(
            `"Blott" Would Like to Send You Notifications`,
            "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.",
            [
                {
                    text: "Don't Allow",
                    style: "cancel",
                    onPress: () => console.log("Permission Denied"),
                },
                {
                    text: "Allow",
                    onPress: requestPermission,
                },
            ]
        );
    };

    const requestPermission = async () => {
        if (!Device.isDevice) {
            Alert.alert("Error", "Notifications only work on a real device.");
            return;
        }

        const { status } = await Notifications.requestPermissionsAsync();

        setPermissionStatus(status);

        router.push('/dashboard')
    };


    return (
        <Button
            label="Continue"
            onPress={showCustomAlert}
        />
    );
};

export default RequestNotificationPermission;