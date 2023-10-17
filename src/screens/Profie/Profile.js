import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import { fontStyle } from '../../theme/fonstStyle';
import { SvgXml } from 'react-native-svg';
import { icons } from '../../assets/icons/icons';
import MainHeader from '../../components/MainHeader';
import LineSeparator from '../../components/LineSeparator';
import { colors } from '../../theme/colors';
import ToggleButton from '../../components/ToggleButton';

const Profile = () => {

    const ServiceView = ({ title, icon, toggle }) => (
        <View style={styles.optionView}>
            <View style={styles.iconView}>
                <SvgXml xml={icon} />
            </View>
            <Text style={[fontStyle.regular18_600, styles.optionsText, { color: title == 'Logout' ? colors.alert : colors.grey900 }]}>{title}</Text>
            {(title != 'Logout' && title != 'Dark Mode') &&
                <TouchableOpacity style={styles.iconView}>
                    <SvgXml xml={icons.right_arrow} />
                </TouchableOpacity>
            }

            {toggle && <ToggleButton />}
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 24 }}>

                    <MainHeader title={'Profile'} icon={icons.Profile_Options.headerEdit} />
                </View>

                <View style={styles.profileIconView}>
                    <View style={styles.innerProfileView}>
                        <SvgXml xml={icons.personIcon} />
                        <View style={styles.touchableContainer}>
                            <TouchableOpacity style={styles.editIconView}>
                                <SvgXml xml={icons.edit} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.textView}>
                        <Text style={[fontStyle.regular24, styles.text]}>Andrew Ainsley</Text>
                        <Text style={fontStyle.regular14}>+1 111 467 378 399</Text>

                    </View>
                </View>

                <View style={{ marginVertical: 20 }}>
                    <SvgXml xml={icons.prductDetailSeparator} />
                </View>

                <View style={styles.mainView}>

                    <ServiceView title={'Edit Profile'} icon={icons.Profile_Options.profile} />
                    <ServiceView title={'Address'} icon={icons.Profile_Options.map} />
                    <ServiceView title={'Notification'} icon={icons.Profile_Options.notification} />
                    <ServiceView title={'Payment'} icon={icons.Profile_Options.payement} />
                    <ServiceView title={'Security'} icon={icons.Profile_Options.security} />
                    <ServiceView title={'Language'} icon={icons.Profile_Options.language} />
                    <ServiceView title={'Dark Mode'} icon={icons.Profile_Options.darkMode} toggle={true} />
                    <ServiceView title={'Privacy Policy'} icon={icons.Profile_Options.privacy} />
                    <ServiceView title={'Help Center'} icon={icons.Profile_Options.helpCenter} />
                    <ServiceView title={'Invite Friends'} icon={icons.Profile_Options.invite} />
                    <ServiceView title={'Logout'} icon={icons.Profile_Options.logout} />



                </View>



            </ScrollView>
        </View >
    )
}

export default Profile;
