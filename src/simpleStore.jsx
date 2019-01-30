import { createStore, combineReducers } from 'redux';
import { todoList } from "~/demo/Reducer";
import { todoAction } from "~/demo/Action";

let store = createStore(todoList);
console.log('store in first state', store.getState());

let unsubscribe = store.subscribe(() => {
    console.log('subscribe store state', store.getState())
});


// store.dispatch(todoAction('this'));
// store.dispatch(todoAction('is'));
// store.dispatch(todoAction('a'));
// store.dispatch(todoAction('simple'));
// store.dispatch(todoAction('store'));
//
// unsubscribe();
