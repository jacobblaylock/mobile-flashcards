import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { NavigationActions } from 'react-navigation'
import { purple } from '../utils/colors'

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
    console.log(this.props.navigation)

    return (
      <View>
        <Text>What is the title of your new Deck?</Text>
         <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(newDeckTitle) => this.setState({newDeckTitle})}
            value={this.state.newDeckTitle}
          />
          <TouchableOpacity
            style={styles.androidSubmitBtn}
            onPress={this.addDeck}
          >            
            <Text>Add Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  androidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,    
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center'
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