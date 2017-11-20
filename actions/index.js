export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const CREATE_QUIZ = 'CREATE_QUIZ'
export const UPDATE_SCORE = 'UPDATE_SCORE'

export function addDeck (deck) {
  return {
    type: 'ADD_DECK',
    deck
  }
}

export function addQuestion (question, deckKey) {
  return {
    type: 'ADD_QUESTION',
    question,
    deckKey
  }
}

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
