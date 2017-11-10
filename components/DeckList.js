import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Deck from './Deck'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class DeckList extends Component {

  state = {
    newDeckTitle: ''
  }

  addDeck = () => {
    this.props.createDeck({
      [this.state.newDeckTitle]: {
        title: this.state.newDeckTitle
      }
    })

    this.setState({
      newDeckTitle: ''
    })
  }

  render() {
    const { flashcards } = this.props
    console.log(flashcards)

    return (
      <View>
        {Object.keys(flashcards).map((key) => {
          return (
            <Deck
              key={key}
              title={key}
              count={flashcards[key].questions ? flashcards[key].questions.length : 0}
            />
          )
        })}
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(newDeckTitle) => this.setState({newDeckTitle})}
            value={this.state.newDeckTitle}
          />
          <TouchableOpacity
            onPress={this.addDeck}
          >            
            <Text>Add Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps(flashcards) {
  return {
    flashcards
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createDeck: (deck) => dispatch(addDeck(deck))      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)