import * as SQLite from 'expo-sqlite'

const test = 'test'
let db

const initializeDatabase = async() => {
    // create db
    db = await SQLite.openDatabaseAsync('ColorBuster.db')
    
    // initialize tables
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS scores(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            score INTEGER NOT NULL
        );
    `)
}

// get all rows
const getAllScores = async()  => {
    const allScores = await db.getAllAsync('SELECT * FROM scores')
    console.log('ALL SCORES:' , allScores)
    return allScores
}

const getHighScore = async() => {
    try {
        const highScore = await db.getFirstAsync('SELECT MAX(score) as highScore FROM scores')
        console.log('HIGH SCORE: ', highScore.highScore)
        return highScore.highScore
    } catch (error) {
        console.error('Error retrieving high score: ', error)
        return 0
    }
}

// insert new score
const insertNewScore = async(score) => {
    try {
        await db.runAsync('INSERT INTO scores (score) VALUES (?)', score)
    } catch (error) {
        console.error('Error inserting score: ', error)
    }
}

// delete all scores
const deleteAllScores = async() => {
    try {
        await db.runAsync('DELETE FROM scores')
    } catch (error) {
        console.error('Error deleting scores: ', error)
    }
}

module.exports = {
    test,
    initializeDatabase,
    getAllScores,
    getHighScore,
    insertNewScore,
    deleteAllScores,
}