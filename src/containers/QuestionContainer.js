import { connect } from "react-redux";
import Question from "../components/Question"
import { fetchQuestion, correctAnswer,wrongAnswer } from "../actions";



const mapStateToProps = state => {
  
    return{
        question: state.newQ,
        score: state.score
    };
}

const mapDispatchToProps = dispatch => {
    return{
        newQuestion: (difficulty) => dispatch(fetchQuestion(difficulty)),
        correctHandler: (points) =>   dispatch(correctAnswer(points)),
        wrongHandler: () => dispatch(wrongAnswer())
            
        }
      
    }





export default connect(mapStateToProps,mapDispatchToProps)(Question);