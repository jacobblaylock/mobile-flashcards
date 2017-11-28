import { AsyncStorage } from 'react-native'

export const MOBILE_FLASHCARDS_KEY = "mobile-flashcards:cards"

export function getDecks () {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
    .then(results => JSON.parse(results))
}

function getDeck (id) {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
    .then(results => {
      const data = JSON.parse(results)
      return data[id]
    })
}

export function saveDeckTitle (deck) {
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify(deck))
}

export const addCardToDeck = (key, question) => {
  return getDeck(key)
    .then((currentState) => {
      let nextState = {
        ...currentState,
        questions: [
          ...currentState.questions,
          question    
        ]
      }

      return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify({
        [key]: nextState
      }))      
    })
}