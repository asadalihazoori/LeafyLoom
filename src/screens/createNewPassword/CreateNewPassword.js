import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import styles from './styles'
import { SvgXml } from 'react-native-svg'
import { icons } from '../../assets/icons/icons'
import { fontStyle } from '../../theme/fonstStyle'
import Button from '../../components/Button'
import Input from '../../components/Input'


const CreateNewPassword = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerMainContainer}>
                <Header title={'Create New Password'} />
                <View style={styles.frameView}>
                    <View style={styles.innerFrameView}>
                        <SvgXml xml={icons.createNewPasswordFrame} />
                    </View>
                </View>
                <View style={styles.mainContainer}>
                    <View style={{ marginBottom: 24 }}>
                        <Text style={fontStyle.regular18_500}>Create Your New Password</Text>
                    </View>
                    <Input icon={icons.lock} password={true} placeholder={'New Password'} />
                    <View style={{ marginTop: 24 }}></View>
                    <Input icon={icons.lock} password={true} placeholder={'Confirm Password'} />
                    <View style={styles.rememberView}>
                        <View style={styles.innerRememberView}>
                            <TouchableOpacity onPress={toggleCheckBox}>
                                <SvgXml xml={isChecked ? icons.checked : icons.unckecked} />
                            </TouchableOpacity>
                            <Text style={[fontStyle.regular14, { marginLeft: 12 }]}>Remember me</Text>
                        </View>

                    </View>


                </View>
                <View style={styles.buttonView}>

                    <Button title={'Continue'} />
                </View>
            </View>
        </View>
    )
}

export default CreateNewPassword