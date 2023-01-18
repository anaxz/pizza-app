import { View, Text, StyleSheet } from 'react-native';

const header = () => {
    return (
        <View>
            <Text style={styles.title}>Pizza Order App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 40,
    },
});

export default header;