import { StyleSheet } from "react-native";

const colors = {
    primary: '#3F524B',
    grey: '#CCC',
}

const commonStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    noPadding: {
        padding: 0,
    },
    image: {
        width: 100,
        height: 200,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        paddingVertical: 20,
        backgroundColor: colors.primary,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: colors.grey,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    textInput: {
        marginTop: 20,
        paddingVertical: 20,
        borderRadius: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: colors.primary,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20,
    }
});

export { commonStyle, colors };