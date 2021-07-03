import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import GenericInput from './components/GenericInput';

function App() {
  const [txtTodo, setTxtTodo] = useState('');
  const [arrTodo, setArrTodo] = useState([]);

  const onTextChangeHandler = (e) => {
    setTxtTodo(e.target.value);
    e.stopPropagation();
    document.addEventListener('keyup', function (event) {
      event.stopPropagation();
      console.log(event.key);
      if (event.key === 'Enter') {
        // handle to do list submission
        console.log('Enter is pressed!');
      }
    });
  };

  const headerDetails = {
    id: 'header',
    className: 'header',
    text: 'To do list',
  };
  console.log(headerDetails);
  return (
    <div className='App'>
      <Header headerProps={headerDetails} />
      <GenericInput
        type='text'
        fieldName='txtTodo'
        id='txtToDo'
        onChangeHandler={onTextChangeHandler}
        value={txtTodo}
        label=''
        key=''
        error=''
      />
    </div>
  );
}

export default App;
