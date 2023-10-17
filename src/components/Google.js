import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

function Google() {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '817065908528-hklije3imq17c226coipda1o5b7sm7uk.apps.googleusercontent.com', // Replace with your Web Client ID
        });
    }, []);

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info:', userInfo);
        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
    };

    return (
        <View>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
            />
        </View>
    );
}

export default Google;
