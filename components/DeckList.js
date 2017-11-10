import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Deck from './Deck'

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

class DeckList extends Component {

  render() {

    return (
      <View>
        {Object.keys(deckList).map((key) => {
          return (
            <Deck
              key={key}
              title={key}
              count={deckList[key].questions.length}
            />
          )
        })}
        
      </View>
    )
  }
}

export default DeckList