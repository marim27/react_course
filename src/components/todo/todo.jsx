import Button from 'react-bootstrap/esm/Button';
const Todo = ({todo,markAsDone,deleteTodo}) => {
    return (
      <div>
<div className='p-3'>
        <div className='ms-5 d-flex'>
        <Button variant="ms-5 me-5 btn btn-dark col-1" onClick={() => markAsDone(todo.id)}>Complete</Button>
        <Button variant="btn btn-dark col-1 me-5"  onClick={() => deleteTodo(todo.id)}>Delete</Button>
        <div className='border col-2 text-center p-2 me-5' style={{height:'2rem' , textDecoration: todo.done ? 'line-through' : 'none'}}>{todo.text}</div>
        </div>
     </div>
      </div>
    );
  };
  
  export default Todo;