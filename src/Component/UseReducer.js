import React, { useReducer } from 'react'

const reducer =(state , action) => {
    switch(action.type){
        case "incrament":
            return {
                count: state.count +1, showText:state.showText
            }
            case 'decreament':
                return{
                    count:state.count, showText: ! state.showText
          };
          default:
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer,{count:0, showText:true})
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=> {
            dispatch({type: "incrament"});
            dispatch({type: "decreament"});
        }}>clcik me</button>

        {state.showText && <p>slam will be come a good developer inshallah</p>}
    </div>
  )
}

export default UseReducer