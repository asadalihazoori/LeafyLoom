import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 48,
        // borderWidth: 1,
        flex: 1,
        backgroundColor: colors.white
    },

    innerMainContainer: {
        justifyContent: 'space-between',
        // alignContent: 'center',
        // alignItems:'center',
        // backgroundColor: 'pink'
        // borderWidth: 1,
        flex: 1
    },

    topView: {
        height: 48,
        // padding: 12px 0px;
        alignItems: 'center',
        alignSelf: 'stretch',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignContent: 'center',

        // borderWidth: 1,
        borderColor: 'red',

    },
    backView: {
        borderRadius: 1,
        // borderColor: 'red',
        height: 28,
        width: '100%',
        // backgroundColor: 'red',

    },

    iconView: {
        // backgroundColor: 'blue',
        height: 28,
        width: 28,

    },

    frameView: {
        alignItems: 'center',
        // borderWidth: 1,
        // marginTop: 10

    },

    textView: {
        // marginTop: 10,
        alignItems: 'center',
        // borderWidth: 1,
        borderColor: 'green',
    },

    text: {
        fontFamily: 'Urbanist',
        fontSize: 48,
        fontWeight: '700',
        fontStyle: 'normal',
        color: '#212121',
    },

    mainContainer: {
        // backgroundColor: 'green',
        // marginTop: 10,,
        // borderWidth: 1,
        borderColor: 'red'
    },

    mediaContainer: {
        // backgroundColor: 'red'
    },

    mediaModal: {
        // height: 32
        paddingVertical: 18,
        borderWidth: 1,
        borderColor: colors.grey200,
        borderRadius: 16,
        alignItems: 'center',

    },

    innerView: {
        flexDirection: 'row',
        // backgroundColor: 'pink',
        alignItems: 'center'

    },

    mediaText: {
        fontFamily: 'Urbanist',
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
        color: '#212121',
        marginLeft: 12,
    },

    separateView: {
        padding: 10,
        marginVertical: 24,
        borderWidth: 1
    },

    innerSeparatorView: {
        borderWidth: 1,
        flexDirection: 'row',
        // backgroundColor: 'red',
        // justifyContent: 'center',
        alignItems: 'center'
    },

    imageSeparator: {
        width: 130

    },

    orText: {
        fontFamily: 'Urbanist',
        fontSize: 18,
        fontWeight: '600',
        fontStyle: 'normal',
        color: '#616161',
        marginHorizontal: 16,
        letterSpacing: 0.2,
    },

    button: {
        backgroundColor: '#01B763',
        paddingHorizontal: 16,
        paddingVertical: 18,
        borderRadius: 100,
        textAlign: 'center',
        alignItems: 'center'

    },

    signinText: {
        fontFamily: 'Urbanist',
        fontSize: 16,
        fontWeight: '700',
        fontStyle: 'normal',
        color: '#FFF',
        letterSpacing: 0.2
    },

    bottomView: {
        // marginTop: 10,
        alignItems: 'center',
        // borderWidth: 1
        // backgroundColor: 'blue'
    },

    bottomInnerView: {
        flexDirection: 'row'
    },

    accountText: {
        color: '#9E9E9E',
        fontFamily: 'Urbanist',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
    },

    signUpText: {
        color: '#01B763',
        fontFamily: 'Urbanist',
        fontSize: 14,
        fontWeight: '600',
        fontStyle: 'normal',
        marginLeft: 8

    }


});

export default styles;
