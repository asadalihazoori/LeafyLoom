import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        // backgroundColor: colors.white,
        // flex: 1,
        padding: 24,
    },

    ScrollView: {
        // borderWidth: 1,
        borderColor: 'green',
        marginTop: 12,

    },
    mainView: {
        // borderWidth: 1,
        borderColor: 'red'
    },

    frameView: {
        alignItems: 'center',
        // borderWidth: 1,
    },

    textView: {
        // borderWidth: 1,
        marginTop: 40,
        textAlign: 'center',
        alignItems: 'center'
    },
});