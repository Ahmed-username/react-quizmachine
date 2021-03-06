import React from "react"
let shuffle = require("shuffle-array");

class Question extends React.Component{


    constructor(){
        super()
        this.selectHandler=this.selectHandler.bind(this);
        this.state={correct:false,wrong:false, tempAnswer:"", difficulty:"easy"}
        this.difficultyHandler=this.difficultyHandler.bind(this);
    }

    componentDidMount(){
        this.props.newQuestion("easy");

    }

    difficultyHandler(event){
      this.setState({difficulty:event.target.value})
      this.props.newQuestion(this.state.difficulty);

    }

    

    selectHandler(event){
        
       event.preventDefault();

        if(event.target.value === this.props.question.results.correct_answer){
            this.setState({correct:true, wrong:false})
            if(this.props.question.results.difficulty==="easy")
            this.props.correctHandler(1)
            else if (this.props.question.results.difficulty==="hard")
            this.props.correctHandler(3)
            else
            this.props.correctHandler(2)
        }
        
        else{
           
            this.setState({correct:false, wrong:true, tempAnswer: this.props.question.results.correct_answer})
            this.props.correctHandler(0)
        }

        this.props.newQuestion(this.state.difficulty);
        event.target.checked=false;

    }

    render(){
        const {results} =this.props.question
        if(!results) return null;
        let arr=[...results.incorrect_answers, results.correct_answer]
        
        shuffle(arr)
       
      
        return ( 
            
            <div>
                <p> difficulty </p>
                <select onChange={this.difficultyHandler} >
                    <option value="easy"> Easy </option>
                    <option value="medium"> Medium </option>
                    <option value="hard"> Hard </option>
                </select>

        
                <form onChange={this.selectHandler}>
                
               
                <p> Question: {results.question} 
                <span className="hidden"> {results.correct_answer} </span> </p>

                {arr.map((answer,i)=>{
                    return(
                    <div key={i}> 
                    <input type="radio" id={i} name="answer" value={answer}/>
                    <label htmlFor={i}> {answer} </label>
                    </div>
                    )

                })}
                
                </form>
                <p className={this.state.wrong ? "red" : "none"}
                > Wrong answer! correct Answer was: {this.state.tempAnswer} </p>
                <p className={this.state.correct ? "green" : "none"}
                > Correct Answer! </p>
                <h2> Score: {this.props.score} </h2>

                <div className="feedback__image__container">
               
                <img className={this.state.wrong ? "feedback__image" : "none"}
                src="../../images/wrong.gif" />
                
                <img className={this.state.correct ? "feedback__image" : "none"} 
                src="../../images/right.gif"  />

                </div>
                
                
           
            </div>
        );
    }


}

export default Question;