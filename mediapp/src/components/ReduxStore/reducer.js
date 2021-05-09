const initialState={
    pageNum=1
}

const reducer=(state=initialState,action)=>{
    let newState={...state}
    if(action.type="SET_PAGE"){
        newState.pageNum=action.pageNum
    }

    return newState
};

export default reducer