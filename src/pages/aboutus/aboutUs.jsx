import  Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';


import React, { useState } from 'react';

function AboutUs() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
    setToDoList([...toDoList, { todo: inputValue, todoNotDone: false }]);
    setInputValue('');
  }};
  const deleteTodo = (index) => {
    const filteredDeletetodo= toDoList.filter((_, todo) => todo !== index);
    setToDoList(filteredDeletetodo);
  };
  // const deleteTodo = (index) => {
  //   setDele(!dele)
  // };
  const markAsDone = (index) => {
        const updatedtodos = toDoList.map((todo,i) => {
          if (i === index) {
            return { ...todo, todoNotDone: true };
          }
          return todo;
        });
        setToDoList(updatedtodos);
      };
  return (
    <div>
<div className='bg-dark py-3 px-5'>
     <div className=''></div>
     <h1 className='text-light fw-bold d-flex justify-content-end'>to-Do app!</h1>
     <p className='text-light  d-flex justify-content-end '>add new to-Do</p>
     <Form onSubmit={handleSubmit}>
     <Form.Control name='newTodo' type="text" placeholder="Enter new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
     <div className='d-flex justify-content-end my-3'>
     <Button type="submit" variant="outline-light">add</Button>
     </div>
     </Form>
  </div>
     <p className='text-center my-5'>let's get some work done!</p>
 <div className='p-3'>

{toDoList.map((addtodo, index) => (
      //  (dele)&&
            <div className='ms-5 d-flex p-3' key={index}>
              <Button variant="ms-5 me-5 btn btn-dark col-1" onClick={() => markAsDone(index)} >Complete</Button>
              <Button variant="btn btn-dark col-1 me-5" onClick={() => deleteTodo(index)}>Delete</Button>
              <div
                className='border col-2 text-center p-2 me-5'style={{ height: '2rem',
                  textDecoration: addtodo.todoNotDone ? 'line-through' : 'none',
                }}>{addtodo.todo} </div>
            </div>
          ))}
</div>
     
    </div>
  );
}

export default AboutUs;



