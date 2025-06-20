import { foodReducer } from "./foodReducer";
import { cartReducer, handleadditem, handledecreasequantity, handleincreasequantity, handleremoveitem } from "./cartreducer";
import { combineReducers,legacy_createStore as createStore } from "redux";

const reducer=combineReducers({
    foodlists:foodReducer,
    cartlist:cartReducer
})
 export  const store=createStore(reducer)
console.log(store)

store.subscribe(()=>{
    console.log(store.getState())
})
// store.dispatch(handleadditem({id:8}))
// store.dispatch(handleadditem({id:1}))

// store.dispatch(handleadditem({id:6}))
// store.dispatch(handleremoveitem({id:8}))
// store.dispatch(handleincreasequantity({id:6}))
// store.dispatch(handledecreasequantity({id:6}))
export const Teststore=()=>{

     
    return<>
    
    </>
}
