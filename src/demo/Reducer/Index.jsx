/**
 * 定义所有的Redux 在当前文件 进行导出
 * redux 捕获action 返回新的state
 */

// const TodoList = (state = {items: ['hello', 'world', 'click', 'me']}, action) => {
//     let Newstate = null;
//     switch (action.type) {
//         case 'Add': // 添加
//             // eslint-disable-next-line
//             Newstate = state.items.concat([prompt('Enter some text')]);
//             return {items: Newstate};
//         case 'Remove': // 删除
//             state.items.splice(action.index, 1);
//             return {items: state.items};
//         default:
//             return state;
//     }
// };

// const Like = (state = { like: false }, action) => {
//   switch (action.type) {
//     case 'change': // 修改
//       return { like: !state.like };
//     default:
//       return state;
//   }
// };
//
//
// export default { TodoList, Like };

const todoList = (state = {items: ['hello', 'world', 'click', 'me']}, action) => {
    let newState = null;
    switch (action.type) {
        case 'ADD':
            newState = state.items.concat(action.payload.value);
            break;
        case 'DEL':
            newState = state.items.splice(action.payload.index, 1);
            break;
        default:
            return state;
    }
};

export {todoList};
