import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import GenericInput from './components/GenericInput';
import TodoList from './components/TodoList';

function App() {
  const [txtTodo, setTxtTodo] = useState('');
  const [arrTodo, setArrTodo] = useState([]);
  const [error, setError] = useState('');

  const onTextChangeHandler = (e) => {
    setTxtTodo(e.target.value);

    if (e.target.value.length === 0) {
      setError("Please type something you'd like to do");
      return;
    } else {
      setError('');
    }
  };

  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      if (txtTodo.length === 0) {
        setError('ooops!... Cannot submit a blank to do item!');
        return;
      } else {
        // handle to do list submission logic
        let newTodoState = [...arrTodo, { todo: txtTodo, done: false }];
        setArrTodo(newTodoState);
        // clear field
        setTxtTodo('');
      }
    }
  };

  const fncOnToDoItemDelete = (e) => {
    let idArr = e.target.id.split('-');
    let id = idArr[idArr.length - 1];
    let newTodoState = arrTodo.filter((item, count) => {
      return count !== id - 1;
    });
    setArrTodo(newTodoState);
  };

  const fncOnToDoCheck = (e) => {
    // get to do list item id
    let idArr = e.target.id.split('-');
    let id = idArr[idArr.length - 1];
    // update item as done in state
    arrTodo[id - 1].done = !arrTodo[id - 1].done;
    setArrTodo(arrTodo);
    // update class of row of item
    let row = document.getElementById('item-' + id.toString());
    row.classList.toggle('done');
  };

  return (
    <div className='App'>
      <Header id='header' className='header' text='Todo List Manager' />
      <div className='todo-input-div'>
        <GenericInput
          type='text'
          fieldName='txtTodo'
          id='txtToDo'
          onChangeHandler={onTextChangeHandler}
          onKeyDownHandler={onKeyDownHandler}
          value={txtTodo}
          label='What would you like to do?'
          key=''
          error={error}
        />
      </div>
      <div className='todo-div'>
        <TodoList
          todos={arrTodo}
          todoItemDelHandler={fncOnToDoItemDelete}
          todoItemCheckHandler={fncOnToDoCheck}
        />
      </div>
    </div>
  );
}

export default App;
