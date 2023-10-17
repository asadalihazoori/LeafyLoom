import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { icons } from '../assets/icons/icons'
import { colors } from '../theme/colors'
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const MediaLine = () => {
    const continueWithGoogle = () => {

        console.log('GoogleSignIn');


        GoogleSignin.configure({
            androidClientId: '817065908528-hklije3imq17c226coipda1o5b7sm7uk.apps.googleusercontent.com',
        });
        GoogleSignin.isSignedIn().then((hasPlayService) => {
            console.log(hasPlayService);

            // if (hasPlayService) {
                console.log('hy1');
                GoogleSignin.signIn().then((userInfo) => {
                    console.log('hy2');
                    console.log(JSON.stringify(userInfo))
                }).catch((e) => {
                    console.log("ERROR IS: " + JSON.stringify(e));
                })
            // }
        }).catch((e) => {
            console.log("ERROR IS: " + JSON.stringify(e));
        })


    };
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.mediaView} >
                    <SvgXml xml={icons.facebook} />

                </TouchableOpacity>
                <TouchableOpacity style={[styles.mediaView, { marginLeft: 20 }]} onPress={continueWithGoogle}>
                    <SvgXml xml={icons.google} />

                </TouchableOpacity>
                <TouchableOpacity style={[styles.mediaView, { marginLeft: 20 }]}>
                    <SvgXml xml={icons.apple} />

                </TouchableOpacity>

            </View>
        </View>
    )
}

export default MediaLine

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 38.5,
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'blue',
    },
    innerContainer: {
        flexDirection: 'row',
        // borderWidth: 1,
    },
    mediaView: {
        borderWidth: 1,
        borderColor: colors.grey200,
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 16,

    }
})