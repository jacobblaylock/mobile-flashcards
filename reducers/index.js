import { ADD_DECK } from '../actions'

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

function flashcards (state = deckList, action) {
  const { type, deck } = action
  switch (type) {
    case ADD_DECK :
      return {
        ...state,
        deck: {
          title: deck
        }
      }
    default :
      return state
  }
}

export default flashcards



