export const Reducer =(state ,action)=> {
    switch (action.type) {
        case "addItem": 
            return [...state,{id:state.length,text:action.payload,done:false}]
        case "updateItem": 
            return state.map(item=>item.id===action.payload? {...item,done:!item.done} : item)
        case "deleteItem": 
            return state.filter(item=> item.id!==action.payload )
        /* case "getToDos":
            return state.filter(item => item.done===false)
        case "getToDones":
            return state.filter(item => item.done===true) */
        case "localStorage":
                return action.payload
        default: return state 
    }
}



