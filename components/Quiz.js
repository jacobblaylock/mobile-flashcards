import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { gray, white, blue } from '../utils/colors'

class Quiz extends Component {
  state = {
    index: 0,
    showAnswer: false
  }

  viewAnswer = () => {
    this.setState((prevState) => ({
      ...prevState,
      showAnswer: !prevState.showAnswer
    }))
  }

  correct = () => {
    // Update Store

    this.setState((prevState) => ({
      index: prevState.index + 1,
      showAnswer: !prevState.showAnswer
    }))
  }

  incorrect = () => {
    // Update Store

    this.setState((prevState) => ({
      index: prevState.index + 1,
      showAnswer: !prevState.showAnswer
    }))
  }  

  render () {
    const { questions } = this.props

    return (
      <View style={styles.container}>
        {!this.state.showAnswer
          ? 
            <View>
              <Text style={styles.title}>Question #{this.state.index + 1}: {questions[this.state.index].question}</Text>
              <TouchableOpacity
                style={styles.submitBtn}
                onPress={this.viewAnswer}
              >            
                <Text style={styles.submitBtnText}>View Answer</Text>
              </TouchableOpacity>
            </View>            
          : 
            <View>
              <Text style={styles.title}>Answer #{this.state.index + 1}: {questions[this.state.index].answer}</Text>
              <TouchableOpacity
                style={styles.submitBtn}
                onPress={this.correct}
              >            
                <Text style={styles.submitBtnText}>Correct</Text>
              </TouchableOpacity>       
              <TouchableOpacity
                style={styles.submitBtn}
                onPress={this.incorrect}
              >            
                <Text style={styles.submitBtnText}>Incorrect</Text>
              </TouchableOpacity>                     
            </View>
        }
      </View>
    )
  }
}

function mapStateToProps ({ flashcards }, { navigation }) {
  const { questions } = navigation.state.params
 
  return {
    questions
  }
}


export default connect(mapStateToProps)(Quiz)


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',    
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 2,
    padding: 20,
    margin: 10
  },
  title: {
    fontSize: 30
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