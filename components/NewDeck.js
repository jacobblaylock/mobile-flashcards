import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { putDeck, deckAdded } from '../actions'
import { NavigationActions } from 'react-navigation'
import { blue, white, gray } from '../utils/colors'

class NewDeck extends Component {
  state = {
    newDeckTitle: ''
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.async.deckAdded){
      this.props.navigation.navigate(
        'DeckDetail',
        { deckKey: this.state.newDeckTitle }
      )    
  
      this.setState({
        newDeckTitle: ''
      })
  
      this.props.deckAdded(false) 
    }   
  }

  addDeck = () => {
    this.props.putDeck({
      [this.state.newDeckTitle]: {
        title: this.state.newDeckTitle,
        questions: []
      }
    })
  }

  render() {
    const { flashcards } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.question}>What is the title of your new Deck?</Text>
         <View>
          <TextInput
            style={styles.title}
            onChangeText={(newDeckTitle) => this.setState({newDeckTitle})}
            value={this.state.newDeckTitle}
          />
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this.addDeck}
          >            
            <Text style={styles.submitBtnText}>Add Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ flashcards, async }) {
  return {
    flashcards,
    async
  }
}

function mapDispatchToProps (dispatch) {
  return {
    putDeck: (deck) => dispatch(putDeck(deck)),
    deckAdded: (flag) => dispatch(deckAdded(flag))      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    height: 40,
    backgroundColor: white,
    borderColor: gray, 
    borderWidth: 1
  },  
  question: {
    fontSize: 20,
    margin: 3
  },
  submitBtn: {
    backgroundColor: blue,
    padding: 10,    
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  submitBtnText: {
    color: white
  } 
})