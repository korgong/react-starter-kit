// const TodoListAction = (dispatch) => {
//     // 定义action
//     const Add = {type: 'Add'};
//
//     function Remove(i) {
//         return {
//             type: 'Remove',
//             index: i,
//         };
//     }
//
//     return {
//         handleAdd: () => dispatch(Add),
//         handleRemove: i => dispatch(Remove(i)),
//     };
// };
//
// const LikeAction = (dispatch) => {
//     // 定义action
//     const change = {type: 'change'};
//     return {
//         handleClick: () => dispatch(change),
//     };
// };

// export {TodoListAction, LikeAction};


// create actionCreater
const todoAction = (value) => {
    return {
        type: 'ADD',
        payload: {value}
    }
};

export {todoAction}
