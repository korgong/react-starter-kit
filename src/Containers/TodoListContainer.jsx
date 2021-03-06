import React from 'react';
import { connect } from 'react-redux';
import { TodoListAction } from '../Action/Index';
// import TodoList from '../Component/TodoList';
import Main from '../Component/TodoList';

// class Main extends Component {
//   render() {
//     return (
//       <TodoList {... this.props} />
//     );
//   }
// }

// function Main(props) {
//   return <TodoList {...props} />;
// }

// mapStateToProps, mapDispatchToProps
export default connect(state => ({ TodoList: state.TodoList }), TodoListAction)(Main); // 连接redux
