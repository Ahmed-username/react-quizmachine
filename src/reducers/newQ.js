function newQ(state={}, action){

    switch(action.type){
        case "NEW_QUESTION":
        const newState=Object.assign({},state, {results:action.results})
        return newState;

        default:
        return state;
    }
}

export default newQ;