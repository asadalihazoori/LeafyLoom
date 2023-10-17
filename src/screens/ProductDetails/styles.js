import { colors } from "../../theme/colors";

const { StyleSheet } = require("react-native")

export const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        borderColor: 'red',
        backgroundColor: colors.white
    },

    detailsView: {
        // borderWidth: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 36,

    },

    imageView: {
        // borderWidth: 1,
        backgroundColor: colors.backgroundSilver1,
    },

    innerDetailView: {
        // borderWidth: 1,
        borderColor: 'green',
    },

    titleView: {
        // borderWidth: 1,
        flex: 1
    },

    iconView: {
        // borderWidth: 1,
        justifyContent: 'center',
        marginLeft: 12
    },


    headerView: {
        // borderWidth: 1,
        flexDirection: 'row',
        borderColor: 'pink'
    },

    ratingView: {
        flexDirection: 'row',
        // borderWidth: 1,
        borderColor: 'red',
        marginTop: 12,

    },

    soldView: {
        borderColor: colors.primaryGreen,
        backgroundColor: colors.transparentgreen,
        // borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 6,
        // marginLeft: 12
        // backgroundColor: ,

    },

    starView: {
        justifyContent: 'center',
        // borderWidth: 1,
        paddingLeft: 16,
        flex: 1
    },

    reviewText: {
        color: colors.grey700,
        marginLeft: 8
    },

    lineSeparator: {
        marginVertical: 16,
        // borderWidth: 1,
        // paddingVertical: 10,
        flex: 1
    },

    quantityView: {
        flexDirection: 'row',
        marginTop: 16,
        // borderWidth: 1,

    },

    incrementView: {
        backgroundColor: colors.backgroundSilver1,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginLeft: 20,
        flexDirection: 'row',
        borderRadius: 100,
    },

    bottomView: {
        flexDirection: 'row',
        // borderWidth: 1,
    },
});