import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { useContext } from 'react'
import { AppContext } from '../context/app_context'

export default function HomeScreen({ navigation }) {

    const { fontLoaded } = useContext(AppContext)

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

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={[styles.red, styles.font]}>C</Text>
                    <Text style={[styles.orange, styles.font]}>O</Text>
                    <Text style={[styles.yellow, styles.font]}>L</Text>
                    <Text style={[styles.blue, styles.font]}>O</Text>
                    <Text style={[styles.green, styles.font]}>R</Text>
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
        marginTop: -90,
    },
    font: {
        fontSize: '90%',
        fontFamily: 'Sixtyfour Convergence',
        // fontFamily: 'Londrina Sketch'
    },
    red: {
        color: 'red',
    },  
    orange: {
        color: 'orange',
    },  
    yellow: {
        color: 'yellow',
    },  
    blue: {
        color: 'blue',
    },  
    green: {
        color: 'green',
    },  
    bottom: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 100,
        fontSize: '90%',
        // borderWidth: 5,
        fontFamily: 'Sixtyfour Convergence',
        flex: 1,
        textAlign: 'center'
    },
    subtitle : {
        fontStyle: "italic",
        marginBottom: 50,
        fontFamily: 'Caveat',
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