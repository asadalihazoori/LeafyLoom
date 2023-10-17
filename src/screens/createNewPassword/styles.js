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

    frameView: {
        // borderWidth: 1,
        alignItems: 'center'
    },

    innerFrameView: {
        // borderWidth: 1,
        borderColor: 'red'
    },

    mainContainer: {
        // borderWidth: 1,
        borderColor: 'orange'

    },

    rememberView: {
        // borderWidth: 1,
        alignItems: 'center',
        marginTop: 24
    },
    innerRememberView: {
        flexDirection: 'row',
        // borderWidth: 1,
        alignItems: 'center'
    },


});

export default styles;