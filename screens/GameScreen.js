import { useContext, useEffect } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { AppContext } from '../context/app_context'

export default function GameScreen () {

    const { mode, allQuestions, GAME_LENGTH, ARCADE_ROUNDS, getColors } = useContext(AppContext)

    useEffect(() => {
        // arcade mode
        if(allQuestions.length < GAME_LENGTH){
            console.log('LENGTH IS LESS THAN', GAME_LENGTH)
            getColors()
        } else {
            console.log('ALL QUESTIONS:', allQuestions)
            console.log(allQuestions.length)
        }
    }, [allQuestions])

    return (
      <SafeAreaView>
        <Text> GAME {mode} </Text>

        <View style={styles.roundContainer}>

            <Text></Text>
        </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    what: {},
    roundContainer: {
        borderWidth: 2
    },
    what: {},
})
