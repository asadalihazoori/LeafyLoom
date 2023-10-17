import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default styles = StyleSheet.create({

    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 48,
        // borderWidth: 1,
        // flex: 1,
        backgroundColor: colors.white,

    },

    innerMainContainer: {
        // justifyContent: 'space-between',
        // alignContent: 'center',
        // alignItems:'center',
        // backgroundColor: 'pink'
        flex: 1,
        // borderWidth: 1,
        borderColor: 'orange'


    },

    formView: {
        // marginTop: 10,
        // borderWidth: 1
    },

    profileIconView: {
        // borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
    },

    innerProfileView: {
        // borderWidth: 1,
        // flexDirection: 'row', // Arrange the SVG and touchable side by side
        // alignItems: 'flex-start', // Align items to the top within the container
        // justifyContent: 'space-between',

    },
    touchableContainer: {
        position: 'absolute',
        bottom: 0, // Position it at the bottom
        right: 0, // Position it at the right
    },
    editIconView: {
        // borderWidth: 1,
    },
    dropDownView: {
        // borderColor: 'red',
        // borderWidth: 1,
        // flex:1
    },
    dobView: {
        marginTop: 14,
        // borderWidth: 1,
        borderRadius: 16,
        padding: 20,
        // width: 380,
        height: 60,
        backgroundColor: colors.grey50

    },

    buttonView: {
        marginTop: 20
    }


})