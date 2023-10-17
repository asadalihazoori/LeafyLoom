import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import styles from './styles'
import Logo from '../../components/Logo'
import { fontStyle } from '../../theme/fonstStyle'
import Input from '../../components/Input'
import Button from '../../components/Button'
import MediaLine from '../../components/MediaLine'
import LineSeparator from '../../components/LineSeparator'
import { SvgXml } from 'react-native-svg'
import { icons } from '../../assets/icons/icons'

const SignUp = ({ navigation }) => {

    const [isChecked, setIsChecked] = useState(false);

    const [inputs, setInputs] = useState({
        email: null,
        password: null,
    });

    const handleInputChange = (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
        })
    }


    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };

    const handlePress = () => {
        console.log(inputs);
        navigation.navigate('FillProfile');
    }


    return (

        <KeyboardAvoidingView style={styles.container}
            behavior='height'
        >
            {/* <View style={styles.container}> */}
            <View style={styles.innerMainContainer}>
                <Header />

                <View style={styles.logoView}>
                    <Logo />
                </View>

                <View style={styles.textView}>
                    <Text style={fontStyle.bold32}>Create Your Account</Text>
                </View>

                <View style={styles.mainContainer}>
                    <Input
                        placeholder={'Email'}
                        icon={icons.email}
                        value={inputs.email}
                        onChangeText={(text) => handleInputChange('email', text)} />

                    <Input
                        marginTop={24}
                        placeholder={'Password'}
                        icon={icons.lock}
                        password={true}
                        value={inputs.password}
                        onChangeText={(text) => handleInputChange('password', text)} />

                    <View style={styles.rememberView}>
                        <View style={styles.innerRememberView}>
                            <TouchableOpacity onPress={toggleCheckBox}>
                                <SvgXml xml={isChecked ? icons.checked : icons.unckecked} />
                            </TouchableOpacity>
                            <Text style={[fontStyle.regular14, { marginLeft: 12 }]}>Remember me</Text>
                        </View>
                    </View>

                    <Button title={'Sign Up'} onPress={handlePress} />

                </View>

                <View style={styles.mediaView}>
                    <LineSeparator title={'or continue with'} />
                    <View style={{ marginTop: 20 }}></View>
                    <MediaLine />
                </View>

                <View style={styles.bottomView}>
                    <View style={styles.bottomInnerView}>
                        <Text style={styles.accountText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.signUpText}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            {/* </View> */}
        </KeyboardAvoidingView>
    )
}

export default SignUp