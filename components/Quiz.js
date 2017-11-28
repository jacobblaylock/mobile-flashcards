import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { updateScore, createQuiz } from '../actions'
import { gray, white, blue } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {
  state = {
    index: 0,
    showAnswer: false
  }

  flipCard = () => {
    this.setState((prevState) => ({
      ...prevState,
      showAnswer: !prevState.showAnswer
    }))
  }

  correct = () => {
    this.props.updateScore()

    this.setState((prevState) => ({
      index: prevState.index + 1,
      showAnswer: false
    }))
  }

  incorrect = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
      showAnswer: false
    }))
  }  

  restartQuiz = () => {
    this.props.createQuiz(this.props.questions)
    this.setState({
      index: 0,
      showAnswer: false
    })
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  resetNotifications = () => {
    clearLocalNotification()
      .then(setLocalNotification)
  }



  render () {
    const { questions, score } = this.props

    if(this.state.index >= questions.length) {
      {this.resetNotifications()}
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Your Final Score is:</Text>
          <Text style={styles.score}>{score} out of {questions.length}</Text>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this.restartQuiz}
          >            
            <Text style={styles.submitBtnText}>Restart Quiz</Text>
          </TouchableOpacity>          
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={this.goBack}
          >            
            <Text style={styles.submitBtnText}>Back to Deck</Text>
          </TouchableOpacity>          
        </View>
      )
    }

    return (
      <View style={styles.container}>
          {!this.state.showAnswer
            ? 
              <View>
                <Text style={styles.title}>Question #{this.state.index + 1}: {questions[this.state.index].question}</Text>
                <TouchableOpacity
                  style={styles.submitBtn}
                  onPress={this.flipCard}
                >            
                  <Text style={styles.submitBtnText}>View Answer</Text>
                </TouchableOpacity>
              </View>            
            : 
              <View>
                <Text style={styles.title}>Answer #{this.state.index + 1}: {questions[this.state.index].answer}</Text>
                <TouchableOpacity
                  style={styles.submitBtn}
                  onPress={this.flipCard}
                >            
                  <Text style={styles.submitBtnText}>View Question</Text>
                </TouchableOpacity>                
              </View>
          }
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
          <Text style={styles.score}>{questions.length - this.state.index} questions left.</Text>
      </View>
    )
  }
}

function mapStateToProps ({ quiz }) {
  const { questions, score } = quiz
  return {
    questions,
    score
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateScore: () => dispatch(updateScore()),
    createQuiz: (questions) => dispatch(createQuiz(questions))     
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)


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
  score: {
    color: gray,
    fontSize: 20
  },  
  submitBtn: {
    backgroundColor: blue,
    padding: 10,    
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
    height: 45,
    width: 180,    
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'    
  },
  submitBtnText: {
    color: white
  }   
})