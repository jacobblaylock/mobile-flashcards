import { getDecks, saveDeckTitle, addCardToDeck } from '../utils/api'

export const LOAD_DECKS = 'LOAD_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DECK_ADDED = 'DECK_ADDED'
export const ADD_QUESTION = 'ADD_QUESTION'
export const CREATE_QUIZ = 'CREATE_QUIZ'
export const UPDATE_SCORE = 'UPDATE_SCORE'



export function loadDecks (decks) {
  return {
    type: 'LOAD_DECKS',
    decks
  }
}

export const fetchDecks = () => dispatch => (
  getDecks()
  .then(decks => dispatch(loadDecks(decks)))
)

export function addDeck (deck) {
  return {
    type: 'ADD_DECK',
    deck
  }
}

export function deckAdded (flag) {
  return {
    type: 'DECK_ADDED',
    flag
  }
}

export const putDeck = (deck) => dispatch => (
  saveDeckTitle(deck)
    .then((res) => {
      dispatch(addDeck(deck))
      dispatch(deckAdded(true))
    })
)

export function addQuestion (question, deckKey) {
  return {
    type: 'ADD_QUESTION',
    question,
    deckKey
  }
}

export const putQuestion = (question, deckKey) => dispatch => (
  addCardToDeck(deckKey, question)
    .then(dispatch(addQuestion(question, deckKey)))
)

export function createQuiz (questions) {
  return {
    type: 'CREATE_QUIZ',
    questions
  }
}

export function updateScore () {
  return {
    type: 'UPDATE_SCORE'
  }
}
