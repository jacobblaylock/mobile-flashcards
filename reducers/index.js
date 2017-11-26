import { combineReducers } from 'redux'
import { 
  LOAD_DECKS,
  ADD_DECK, 
  DECK_ADDED,
  ADD_QUESTION, 
  CREATE_QUIZ, 
  UPDATE_SCORE
} from '../actions'

const deckList = {}

const initialQuizState = {
  questions: [],
  score: 0
}

function flashcards (state = deckList, action) {
  const { type, decks, deck, question, deckKey } = action

  switch (type) {
    case LOAD_DECKS : 
      return {
        ...decks
      }
    case ADD_DECK :
      return {
        ...state,
        ...deck
      }
    case ADD_QUESTION :
      return {
        ...state,
        [deckKey]: {
          ...state[deckKey],
          questions: [
            ...state[deckKey].questions,
            question
          ]
        }
      }
    default :
      return state
  }
}

function quiz (state = initialQuizState, action) {
  const { type, questions } = action

  switch(type){
    case CREATE_QUIZ :
      return {
        questions: questions,
        score: 0
      }
    case UPDATE_SCORE :
      return {
        ...state,
        score: state.score + 1
      }
    default :
      return state
  }
}

function async (state = {}, action) {
  const { type, flag } = action

  switch (type) {
    case DECK_ADDED :
      return {
        ...state,
        deckAdded: flag
      }
    default :
      return state
  }
}

export default combineReducers({
  flashcards,
  quiz,
  async
})