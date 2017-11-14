import { combineReducers } from 'redux'
import { ADD_DECK, ADD_QUESTION, CREATE_QUIZ } from '../actions'

const deckList = {
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

const initialQuizState = {
  questions: [],
  score: 0
}

function flashcards (state = deckList, action) {
  const { type, deck, question, deckKey } = action

  switch (type) {
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
      return questions
    default :
      return state
  }
}

export default combineReducers({
  flashcards,
  quiz
})