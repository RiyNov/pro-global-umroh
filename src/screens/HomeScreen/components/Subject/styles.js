import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    leftContainer: {
        alignSelf: 'center',
    },
    rightContainer: {
        marginLeft: 10,
        paddingVertical: 17,
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#dbdbdb',
        borderBottomWidth: 0.5,
    },
    title: {
        fontSize: 16,
    },
    icon: {
        height: 36,
        width: 36,
        borderRadius: 18
    },
    arrow: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
    }
})

export default styles