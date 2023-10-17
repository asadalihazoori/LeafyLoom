import { View, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import styles from './styles'
import { SvgXml } from 'react-native-svg'
import { icons } from '../../assets/icons/icons'
import Input from '../../components/Input'
import Button from '../../components/Button'
import DropDown from '../../components/DropDown'
import DatePicker from '../../components/DatePicker'
import ImagePicker from '../../components/ImagePicker'
import CountryCodePicker from '../../components/CountryCodePicker'

const FillProfile = ({ navigation }) => {
    const [inputs, setInputs] = useState({
        image: null,
        fullName: null,
        nickname: null,
        dob: null,
        email: null,
        phoneNo: null,
        gender: null,
    });
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const gender = ["Male", "Female"];

    const handleDateChange = (selectedDate) => {
        // console.log(selectedDate);
        setShowDatePicker(false);
        setInputs({
            ...inputs,
            ['dob']: selectedDate.toDateString(),
        });
    };

    const handleInputChange = (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
        })
    }

    const handleImageSelected = (imageUri) => {
        setInputs({
            ...inputs,
            ['image']: imageUri,
        });
    };

    const handleGenderSelection = (selectedItem) => {
        setInputs({
            ...inputs,
            ['gender']: selectedItem,
        })
    }

    const handlePress = () => {
        navigation.navigate('CreateNewPin')
        // console.log(inputs);
    }


    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView style={styles.innerMainContainer} keyboardVerticalOffset={Platform.OS === 'android' ? -100 : 0}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Header title={'Fill Your Profile'} />
                <View style={styles.formView}>
                    <View style={styles.profileIconView}>
                        <View style={styles.innerProfileView}>
                            {inputs.image ?
                                <View>
                                    <Image source={{ uri: inputs.image }} height={140} width={140} style={{ borderRadius: 100 }} />

                                </View>
                                :
                                <View>
                                    <SvgXml xml={icons.personIcon} />
                                    <View style={styles.touchableContainer}>
                                        <TouchableOpacity style={styles.editIconView} onPress={() => setModalVisible(true)}>
                                            <SvgXml xml={icons.edit} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            }

                        </View>

                    </View>
                    <Input
                        placeholder={'Full Name'}
                        onChangeText={(text) => handleInputChange('fullName', text)}
                        value={inputs.fullName}
                        icon={false}
                        marginTop={14} />

                    <Input
                        placeholder={'Nickname'}
                        onChangeText={(text) => handleInputChange('nickname', text)}
                        value={inputs.nickname}
                        marginTop={14} />

                    <View>
                        <DatePicker dob={new Date()} value={inputs.dob}
                            onChange={(event, selectedDate) => handleDateChange(selectedDate)}
                            showDatePicker={showDatePicker}
                            setShowDatePicker={setShowDatePicker}
                        />
                    </View >

                    <Input
                        placeholder={'Email'}
                        onChangeText={(text) => handleInputChange('email', text)}
                        value={inputs.email}
                        marginTop={14}
                        rightIcon={icons.profile_email} />


                    <Input
                        placeholder={'Phone Number'}
                        onChangeText={(text) => handleInputChange('phoneNo', text)}
                        value={inputs.phoneNo}
                        marginTop={14}
                        countryPicker={true}
                        keyboardType={'phone-pad'}
                    />

                    <View style={styles.dropDownView}>
                        <DropDown data={gender}
                            onSelect={(selectedItem, index) => {
                                handleGenderSelection(selectedItem)
                            }}
                            value={inputs.gender} />
                    </View>

                </View>

                <View style={styles.buttonView}>
                    <Button title={'continue'} onPress={handlePress} />
                </View>

                <ImagePicker modalVisible={modalVisible} setModalVisible={setModalVisible}
                    onImageSelected={handleImageSelected} />
            </KeyboardAvoidingView>
        </ScrollView >

    )
}

export default FillProfile;