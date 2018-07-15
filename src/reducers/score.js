 function score(state=0, action){
     switch(action.type){
         case "UPDATE_SCORE":
         if(action.points>0){
         const newState= state+action.points;
         return newState
         }
         else
            return 0;

         default:
         return state;
     }
 }

 export default score;