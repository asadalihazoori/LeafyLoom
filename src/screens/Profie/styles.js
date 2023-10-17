import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        // padding: 24,
        paddingHorizontal: 24
    },
    innerContainer: {
        flex: 1,
        // borderWidth: 1,
        // marginTop: 24,
    },

    profileIconView: {
        // borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
        marginTop: 10,
    },

    innerProfileView: {
        // borderWidth: 1,

    },

    touchableContainer: {
        position: 'absolute',
        bottom: 0, // Position it at the bottom
        right: 0, // Position it at the right
    },
    editIconView: {
        // borderWidth: 1,
    },

    textView: {
        alignItems: 'center',
        // textAlign: 'center'
    },

    text: {
        marginTop: 12,
        marginBottom: 8
    },

    mainView: {
        // borderWidth: 1,
        borderColor: 'green',
        flex: 1,
    },

    optionView: {
        // borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },

    iconView: {
        // borderWidth: 1,
        justifyContent: 'center',
        // marginLeft: 16
    },

    optionsText: {
        // borderWidth: 1,
        flex: 1,
        marginHorizontal: 16,
    },



});