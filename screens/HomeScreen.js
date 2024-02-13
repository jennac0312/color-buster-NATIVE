import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'

const colors = [
    // 'red',
    // 'orange',
    // 'yellow',
    // 'blue',
    // 'green',
    'purple',
    'cyan',
    'salmon',
    'lime',
    'gold',
    'magenta',
]

const buster = 'BUSTER'

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.red}>C</Text>
                    <Text style={styles.orange}>O</Text>
                    <Text style={styles.yellow}>L</Text>
                    <Text style={styles.blue}>O</Text>
                    <Text style={styles.green}>R</Text>
                </View>

                <View style={styles.bottom}>
                    {
                        buster.split('').map((letter, index) => {
                            return <Text key={index} style={[styles.text, {color: colors[index]}]}>{letter}</Text>
                        })
                    }
                </View>

                <View>
                    <Text style={styles.subtitle}>the brain game</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('Mode')
                        }}
                    >
                        <Text>PLAY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('Directions')
                        }}
                    >
                        <Text>DIRECTIONS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        borderColor: 'red',
        borderWidth: 3,
        height: '100%',
        // width: '100%',
        alignItems  : 'center',
        justifyContent: 'center',
    },
    top : {
        flexDirection: 'row',
        // borderWidth: 2,
        borderWidth: 2,
        // height: '100%'
    },
    red: {
        color: 'red',
        fontSize: 100
    },  
    orange: {
        color: 'orange',
        fontSize: 100
    },  
    yellow: {
        color: 'yellow',
        fontSize: 100
    },  
    blue: {
        color: 'blue',
        fontSize: 100
    },  
    green: {
        color: 'green',
        fontSize: 100
    },  
    bottom: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 100,
        // borderWidth: 5
    },
    subtitle : {
        fontStyle: "italic",
        marginBottom: 40,
    },
    buttonContainer : {
        borderWidth: 2,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    button : {
        display: 'flex',
        backgroundColor: 'tan',
        padding: 10,
        width: '25%',
        alignItems: 'center',
        borderRadius: 10,
        fontWeight: 'bold'
    },
})