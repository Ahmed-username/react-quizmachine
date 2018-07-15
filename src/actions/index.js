export function fetchQuestion(difficulty){
  ///https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean
  
  return function(dispatch){
    return fetch(
      `https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${difficulty}`
    )
      .then(response => response.json())
      .then(json => {
        
       dispatch(storeQuestion(json.results[0]));
      });

    
  }
}


export function storeQuestion(data){
  
  return{
    type: "NEW_QUESTION", 
    results: data
  }

}

export function correctAnswer(points){

  return{
    type:"UPDATE_SCORE",
    points
  }
}

export function wrongAnswer(){
  return{
    type:"RESET_SCORE"
  }
}
