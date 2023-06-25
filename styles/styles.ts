import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        paddingLeft: 15,
        borderColor: 'grey',
        paddingVertical: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        borderWidth: 5,
        borderRadius: 30,
    },
    title: {
        fontStyle: 'italic',
        fontWeight: '600',
        fontSize: 18,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    button: {
        fontSize: 50,
        paddingHorizontal: 15,
        backgroundColor: 'pink',
        paddingVertical: 5,
        marginHorizontal: 3,
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    headerButton: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginRight: 25
    }
});

export default styles;
