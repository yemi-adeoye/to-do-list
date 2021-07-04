import React from 'react';
import Text from './Text';
import Button from './Button';
import GenericInput from './GenericInput';

const Todo = ({
  countId,
  countClass,
  count,
  todoItemId,
  todoItemClass,
  todoText,
  todoDelId,
  todoDelClickHandler,
  todoDelClass,
  todoCheckType,
  todoCheckHandler,
  todoKeyDownHandler,
  todoCheckName,
  todoCheckId,
  todoCheckValue,
  todoLabel,
  todoCheckDone,
  todoKey,
  todoError,
}) => {
  return (
    <div id={'item-' + count} className='item'>
      <Text id={countId} className={countClass} text={count} />
      <Text id={todoItemId} className={todoItemClass} text={todoText} />
      <GenericInput
        type={todoCheckType}
        fieldName={todoCheckName}
        id={todoCheckId}
        onChangeHandler={todoCheckHandler}
        onKeyDownHandler={todoKeyDownHandler}
        value={todoCheckValue}
        label={todoLabel}
        key={todoKey}
        error={todoError}
        checked={todoCheckDone}
      />
      <Button
        id={todoDelId}
        className={todoDelClass}
        value='Delete Me'
        onClickHandler={todoDelClickHandler}
      />
    </div>
  );
};

export default Todo;
