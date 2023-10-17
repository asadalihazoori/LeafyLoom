
import { CountryPicker } from "react-native-country-codes-picker";
import { View, TouchableOpacity, Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SvgXml } from "react-native-svg";
import { icons } from "../assets/icons/icons";

export default function CountryCodePicker() {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState({});

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setShow(true)}
                style={{
                    // width: '20%',
                    // height: 60,
                    // backgroundColor: 'black',
                    // padding: 10,
                    flex: 1
                }}
            >
                {countryCode.flag ?
                    <Text style={{}}>
                        {countryCode.flag}
                    </Text>
                    :
                    <SvgXml xml={icons.flag} />
                }
            </TouchableOpacity>

            <CountryPicker
                show={show}
                pickerButtonOnPress={(item) => {
                    setCountryCode(item);
                    setShow(false);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: 'red',
        flex: 1
    },

})