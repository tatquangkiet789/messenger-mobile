import { View, Text, Platform, Button } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { useEffect, useRef, useState } from 'react';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

export default function PushNotificationScreen() {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(null as any);
    const notificationListener = useRef(null as any);
    const responseListener = useRef(null as any);

    async function registerForPushNotificationAsync() {
        if (Platform.OS === 'android') {
            await Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
        if (!Device.isDevice) {
            alert('Must use physical device for Push Notifications');
            return;
        }

        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus === 'granted') {
            const { status } = await Notifications.getPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }

        const token = (
            await Notifications.getExpoPushTokenAsync({
                projectId: Constants.expoConfig?.extra?.eas.projectId,
            })
        ).data;
        console.log(`Expo push notification token: `, token);

        return token;
    }

    useEffect(() => {
        registerForPushNotificationAsync().then((token) => setExpoPushToken(token!));

        notificationListener.current = Notifications.addNotificationReceivedListener(
            (notification) => {
                setNotification(notification);
            },
        );

        responseListener.current = Notifications.addNotificationResponseReceivedListener(
            (response) => {
                console.log(response);
            },
        );

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <Text>Your expo push token: {expoPushToken}</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>Title: {notification && notification.request.content.title} </Text>
                <Text>Body: {notification && notification.request.content.body}</Text>
                <Text>
                    Data: {notification && JSON.stringify(notification.request.content.data)}
                </Text>
            </View>
            <Button
                title='Press to Send Notification'
                // onPress={async () => {
                //     await sendPushNotification(expoPushToken);
                // }}
            />
        </View>
    );
}
