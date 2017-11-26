import { AsyncStorage } from 'react-native'

export const MOBILE_FLASHCARDS_KEY = "mobile-flashcards:cards"

const initialDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }  
}  

export function getDecks () {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
    .then(results => JSON.parse(results))
}

export function getDeck (id) {
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_KEY)
    .then(results => {
      const data = JSON.parse(results)
      return data[id]
    })
}

export function saveDeckTitle (deck) {
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_KEY, JSON.stringify(deck))
}

export function addCardToDeck (title, card) {
  
}