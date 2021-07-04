import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, todoItemDelHandler, todoItemCheckHandler }) => {
  const items = todos.map((todoItem, count) => {
    return (
      <Todo
        countId={'item-count-' + (count + 1)}
        countClass='item-count'
        count={count + 1}
        todoItemId={'item-' + (count + 1)}
        todoItemClass='item-todo'
        todoText={todoItem.todo}
        todoDelId={'btn-' + (count + 1)}
        todoDelClickHandler={todoItemDelHandler}
        todoDelClass='btn-del'
        todoCheckType='checkbox'
        todoCheckName='ki'
        todoCheckId={'chk-todo-' + (count + 1)}
        todoCheckHandler={todoItemCheckHandler}
        todoKeyDownHandler=''
        todoCheckValue='done'
        todoLabel=''
        todoCheckDone={todoItem.done}
        todoKey=''
        todoError=''
        key='count'
      />
    );
  });

  return <div className='items'>{items}</div>;
};

export default TodoList;
