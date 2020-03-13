import { createStore,combineReducers } from 'redux';

// 初始化
const initState  = {
    count:0
}

const reducer = (state=initState, action) => {
  console.log(action,"redux");
    switch (action.type){
      case 'INCREMENT': return {count: state.count + 1};
      case 'DECREMENT': return {count: state.count - 1};
      default: return state;
    }
}

const initUser={
  name:'',
  age:'',
  sex:'',
  id:''
}

const userReducer = ( state=initUser,action  )=>{
  console.log(action,"userReducer")
  switch (action.type){
    case 'UPDATE_USER': return Object.assign({},state,{ name:'张三',age:20,sex:'女',id:'dada4545da5d45ad45ad5' });
    default: return state;
  }
}
// 初始化 reducer
export default createStore(reducer);
// export default combineReducers({reducer,userReducer});
