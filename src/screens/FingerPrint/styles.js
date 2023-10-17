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
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'pink'
        // borderWidth: 1,
        flex: 1


    },
    textView: {
        // borderWidth: 1,
        // alignItems: 'center',
        // textAlign: 'center'
    },

    text: {
        textAlign: 'center'
    },
    fingerPrintView: {
        // borderWidth: 1,
        // borderColor: 'red',
        alignItems: 'center'
    },
    innerView: {
        // borderWidth: 1

    },
    buttonView: {
        // borderWidth: 1,
        // borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    innerButtonView: {
        flex: 1
    }




});

export default styles;