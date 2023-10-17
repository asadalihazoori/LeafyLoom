import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { colors } from '../theme/colors'
import { fontStyle } from '../theme/fonstStyle'

const OTPInput = ({ length }) => {


    const [arr, setArr] = useState(new Array(length).fill(''));
    const myRef = useRef(null);

    useEffect(() => {
        if (myRef.current) {
            myRef.current.focus();
        }
    }, []);
    const focusInput = () => {
        if (myRef.current) {
            myRef.current.focus();
        }
    };

    const handleInput = (text) => {

        const newArr = new Array(length).fill(0).map((_, index) => {
            return index < text.length ? parseInt(text[index]) : '';
        });

        setArr(newArr);

    }


    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                keyboardType='numeric'
                maxLength={length}
                ref={myRef}
                onChangeText={(text) => {
                    handleInput(text);
                }}
                caretHidden={true}
            />
            {arr.map((value, index) => (

                <TouchableOpacity
                    key={index}
                    onPress={focusInput}
                    style={[styles.textBox,
                    {
                        marginLeft: (index == 0) ? 0 : 16,
                        borderColor: typeof value === 'number' ? colors.primaryGreen : colors.grey200
                        // borderColor: index === arr.length - 1 && !value ? 'red' : colors.primaryGreen
                    }

                    ]}>
                    <Text style={[fontStyle.regular24, { textAlign: 'center' }]}>{value}</Text>
                </TouchableOpacity>
            ))}

        </View>
    )
}

export default OTPInput

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: colors.white

    },
    innerContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        // borderWidth:1
    },
    input: {

        position: 'absolute',
        padding: 0,
        color: 'transparent'

    },
    textBox: {
        // borderColor: colors.primaryGreen,
        // backgroundColor: colors.transparentgreen,
        borderWidth: 1,
        flex: 1,
        borderRadius: 16,
        paddingVertical: 16,

    }
})