import { ActivityIndicator, View } from "react-native";
import { createContext, useEffect, useState } from "react";
import * as Font from 'expo-font'
const Database = require('./database')

export const AppContext = createContext()

export default AppContextProvider = ({ children }) => {

    // DATABASE
    useEffect(() => {
        const setupDatabase = async() => {
            try {
                await Database.initializeDatabase(); // Ensure this is awaited
            } catch (error) {
                console.error('Database initialization error:', error);
            }
        } 

        setupDatabase()
    }, [])

    // FONTS
    const [fontLoaded, setFontLoaded] = useState(false)

    useEffect(() => {
        const fetchFonts = async() => {
            try {
                await Font.loadAsync({
                    'Sixtyfour-Convergence': require('../assets/fonts/SixtyfourConvergence-Regular-VariableFont_BLED,SCAN,XELA,YELA.ttf'),
                    'Caveat': require('../assets/fonts/Caveat-VariableFont_wght.ttf'),
                    'Londrina Sketch': require('../assets/fonts/LondrinaSketch-Regular.ttf'),
                    // 'Edu Australia VIC WA NT Hand Dots': require('../assets/fonts/EduAUVICWANTDots-VariableFont_wght.ttf'),
                    'Rubik Bubbles': require('../assets/fonts/RubikBubbles-Regular.ttf'),
                    'Bungee': require('../assets/fonts/Bungee-Regular.ttf'),
                })
                setFontLoaded(true)
            } catch (error) {
                console.warn('Error loading fonts ', error)
            }
        }
        fetchFonts()
    }, [])

    // GAME LOGIC
    const test = 'test'
    const [gameLength, setGameLength] = useState(null)
    const ARCADE_ROUNDS = 10
    const [ mode, setMode ] = useState(null)
    const [ score, setScore ] = useState(0)

    const colors = ['red', 'orange', 'yellow', 'green', 'purple', 'pink', 'blue', 'grey', 'brown', 'white']

    const [ question, setQuestion ] = useState({
        colors: [],
        name: '',
        style: ''
    }) //colors, name, style

    const [ allQuestions, setAllQuestions ] = useState([]) // need to shift first question

    // random inclusive
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // get unique array of 4 colors
    const getColors = () => {
        let list = []
        for(let i = 0; i <= 3; i++){
            let random = getRandomIntInclusive(0, colors.length -1)
            // console.log('RANDOM', random)
            list.push(colors[random])
        }
        // console.log('ORIGINAL LIST', list)
        checkUniqueColors(list)
    }
    // getColors()
    // getColors()
    // getColors()

    // check unique colors
    function checkUniqueColors(list) {
        // check unique
        const uniqueSet = new Set(list)
        // check length === 4
        // console.log('UNIQUE SET', uniqueSet)
        if( uniqueSet.size === list.length ){
            // console.log('PASS PASS PASS')
            configureQuestion(list)
        } else {
            // else run it back
            getColors()
            // console.log('FAIL FAIL FAIL')
        }
        // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        // console.log('LENGTH:', allQuestions.length)
    }
    
    function configureQuestion(list) {
        // colors [4] unique

        // name "1" (from colors)
        // style "1" (from colors)
        const newQuestion = {
            colors: list,
            name: list[getRandomIntInclusive(0,list.length -1)],
            style: list[getRandomIntInclusive(0,list.length -1)]
        }
        setQuestion(newQuestion)
        // console.log('QUESTION SET', question)

        // // push to all questions
        // setAllQuestions(previous => [...previous, newQuestion])
        
        // console.log('ALL QUESTIONS:', allQuestions)
        // console.log('ALL QUESTIONS LENGTH:', allQuestions.length)

        // synchronized state update
        // setQuestion(newQuestion, () => {
        //     setAllQuestions(prevQuestions => [...prevQuestions, newQuestion]);
        // })
    }

    // only updates allQs when question is updated... prevents allQs > GAME_LENGTH
    useEffect(() => {
        if(question.colors.length === 4){
            setAllQuestions(previous => [...previous, question])
            console.log('USE EFFECT ALL QS:', allQuestions)
        }
    }, [question])

    //  wont work bc getcolors is async (calls other functions)
    // while(allQuestions.length < 5){
    //     getColors() 
    // }

    // useEffect(() => {
    //     if(allQuestions.length <= GAME_LENGTH){
    //         getColors()
    //     } else {
    //         console.log('ALL QUESTIONS:', allQuestions)
    //     }
    // }, [allQuestions])

    // update gameLength based on mode
    useEffect(() => {
        switch (mode) {
            case 'easy':
                setGameLength(5)
                break;
            case 'hard':
                setGameLength(5)
                break;
            case 'speed':
                setGameLength(10)
                break;
            case 'arcade':
                setGameLength(10)
                break;
            default:
                setGameLength(3)
        }
    }, [mode])

    return(
        <AppContext.Provider
            value={{
                fontLoaded,

                test,
                mode, setMode,
                gameLength, ARCADE_ROUNDS,
                setAllQuestions, allQuestions, getColors,
                score, setScore,

                Database
            }}
        >
            { !fontLoaded ? (
                    <View style={{ 'flex': 1, 'justifyContent': 'center', 'alignItems': 'center' }}>
                        <ActivityIndicator size='large' color='black'/>
                    </View>
                ) : (
                    children
                )}
        </AppContext.Provider>
    )
}