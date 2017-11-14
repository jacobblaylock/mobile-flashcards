import { ADD_DECK, ADD_QUESTION } from '../actions'

function flashcards (state = deckList, action) {
  const { type, deck, question, deckKey } = action
  console.log(deckKey)
  console.log(question)
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

export default flashcards



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