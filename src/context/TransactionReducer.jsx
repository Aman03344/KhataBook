export const  TransactionReducer = (state, action)=>{


    switch(action.type){
        case "DELETE_TRANS":
            return{
                ...state,
                transaction: state.transaction.filter((item)=> item.id !== action.payload)
            }
        case "ADD_TRANS":
            return{
                ...state,
                transaction:[{id:crypto.randomUUID(), text: action.payload.text, amount:action.payload.amount},...state.transaction]
            }
        case "EDIT_TRANS":
            return{
                ...state,
                edit: {transaction: action.payload , isEdit : true}
            }
        case "UPDATE_TRANS":
            return{
                ...state,
                transaction: state.transaction.map((item)=> item.id === action.payload.id ? action.payload : item),
                edit:{ transaction: {}, isEdit: false}
            }
    }

}