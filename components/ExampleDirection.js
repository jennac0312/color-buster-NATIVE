import { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, NativeEventEmitter } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window') // global

export default function ExampleDirection () {

    const [mode, setMode] = useState('easy')

    const handleScrollEnd = ({ nativeEvent }) => {
        const x = nativeEvent.contentOffset.x // x axis position
        console.log(x)

        x ? setMode('hard') : setMode('easy')
    }

    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}> HOW TO PLAY: </Text> */}

        <View style={styles.mode}>
            <Text style={ mode === 'easy' ? {'fontWeight': 'bold', 'fontStyle': 'italic', 'textDecorationLine': 'underline'} : {'textDecorationLine': 'line-through'} }>easy</Text>
            <Text style={styles.line}>|</Text>
            <Text style={ mode === 'hard' ? {'fontWeight': 'bold', 'fontStyle': 'italic', 'textDecorationLine': 'underline'} : {'textDecorationLine': 'line-through'} }>hard</Text>
        </View>
        
        <ScrollView 
            style={styles.scroll} 
            horizontal
            pagingEnabled //snaps to each screen
            contentContainerStyle={{ width: width * 2}}
            onMomentumScrollEnd={handleScrollEnd}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.easy}>
                <Text style={styles.exampleColor}>RED</Text>
                <View style={styles.optionsContainer}>
                    <View style={[styles.option, {position: 'relative'}]}>
                        <Text style={{ 'fontFamily': 'Bungee' }}>yellow</Text>
                        <MaterialCommunityIcons name="gesture-tap" size={34} color="black" style={styles.tap}/>
                    </View>
                    <View style={styles.option}>
                        <Text style={{ 'fontFamily': 'Bungee' }}>orange</Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={{ 'fontFamily': 'Bungee' }}>green</Text>
                    </View>
                    <View style={styles.option}>
                        <Text style={{ 'fontFamily': 'Bungee' }}>red</Text>
                    </View>
                </View>

                {/* <> */}
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', 'marginTop': -40}}>
                        <Text style={styles.explanation}>Though the word spells </Text>
                        <Text style={[styles.explanation, {color: 'red', 'fontFamily': 'Bungee'}]}>RED</Text>
                        <Text style={styles.explanation}>, it's colored in </Text>
                        <Text style={[styles.explanation, {color: 'yellow', 'fontWeight': 'bold'}]}>yellow</Text>
                        <Text style={styles.explanation}>.</Text>
                    </View>

                    <Text style={styles.explanation}>Therefore, the answer is <Text style={{ 'fontFamily': 'Bungee' }}>YELLOW</Text>!</Text>
                {/* </> */}
            </View>
            <View style={styles.hard}>
                <Text style={styles.exampleColor}>RED</Text>
                <View style={styles.optionsContainer}>
                    <View style={[styles.option, { backgroundColor: 'yellow'}]}>
                        <Text> </Text>
                    </View>
                    <View style={[styles.option, {backgroundColor: 'orange'}]}>
                        <Text> </Text>
                    </View>
                    <View style={[styles.option, {backgroundColor: 'green'}]}>
                        <Text> </Text>
                    </View>
                    <View style={[styles.option, {position: 'relative', backgroundColor: 'red'}]}>
                        <Text> </Text>
                        <MaterialCommunityIcons name="gesture-tap" size={34} color="black" style={styles.tap}/>
                    </View>
                </View>

                {/* <> */}
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', 'marginTop': -40}}>
                        <Text style={[styles.explanation, {color: 'red', 'fontFamily': 'Bungee'}]}>RED</Text>
                        <Text style={styles.explanation}> is colored in </Text>
                        <Text style={[styles.explanation, {color: 'yellow', 'fontWeight': 'bold'}]}>yellow</Text>
                        <Text style={styles.explanation}>, but don't be fooled!</Text>
                    </View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <Text style={styles.explanation}>The answer is </Text>
                        <View style={[styles.explanation, {color: 'red', 'borderColor': 'red', 'borderWidth': 2, 'backgroundColor': 'red', 'borderRadius': 5, 'aspectRatio' : 1 }]}><Text style={{ 'color': 'red' }}>red</Text></View>
                    </View>
                {/* </> */}
            </View>
        </ScrollView>

      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        borderColor: 'red',
        marginTop: 50,
        // position: 'absolute',
        // top: '50%',
        // bottom: '50%',
        // left: '50%',
        // right: '50%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        // borderWidth: 2,
        // borderColor: 'tan',
        textDecorationLine: 'underline',
        textDecorationColor: 'tan'
    },
    mode: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    line: {
        marginLeft: 5,
        marginRight: 5,
    },
    scroll: {
        // width: '100%',
        // borderWidth: 2,
        // borderColor: 'orange',
        // backgroundColor: 'lime',
        flexDirection: 'column',
        // height: 'fit content',
    },
    easy: {
        width: width,
        // height: '100%',
        // flex: 1,
        // height: 'inherit',
        // borderWidth: 2,
        // borderColor: 'pink',
        // backgroundColor: 'grey',
        alignItems: 'center',
    },
    hard: {
        width: width,
        // borderWidth: 4,
        // justifySelf: 'flex-end',
        // width: '100%',
        // height: '100%',
        // height: 'inherit',
        // borderWidth: 2,
        borderColor: 'pink',
        // backgroundColor: 'lightgrey',
        alignItems: 'center',
    },
    exampleColor: {
        fontWeight: 'bold',
        fontSize: 60,
        color: 'yellow',
        fontFamily: 'Bungee'
    },
    optionsContainer: {
        // borderWidth: 2,
        width: width,
        height: '100%',
        // height: 210,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    option: {
        // flexGrow: 1,
        // flexBasis: '40%',
        // height: '40%',
        // height: 50,
        width: '40%',
        aspectRatio: 1, // squares
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .75)',
    },
    explanation: {
        fontSize: 20,
        // borderWidth: 2,
        // borderColor: 'red'
    },
    tap: {
        position: "absolute",
        left: '75%',
        top: '50%',
        transform: [{rotate: '-30deg'}],
    },
})