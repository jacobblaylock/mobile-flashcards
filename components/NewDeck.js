import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { NavigationActions } from 'react-navigation'
import { blue, white, gray } from '../utils/colors'

class NewDeck extends Component {

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

    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { flashcards } = this.props
    console.log(flashcards)

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

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)