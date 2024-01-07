import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Register = () => {
   const [user,setUser]= useState({
    userName:'',
    fullName:'',
    email:'',
    password:'',
    confirmPassword:''
   })
   const [userErr,setUserErr]= useState({
    userNameErr:'',
    fullNameErr:'',
    emailErr:'',
    passwordErr:'',
    confirmPasswordErr:''
   })
const emailRegx=/^[a-zA-Z0-9]{4,15}(@)(gmail|yahoo|outlook)(.com)$/
const passwordRegx=/^[a-z]+[A-Z]+[*:!#&^$.?#@]+[0-9]+$/

  const handelForm=(eve)=>{
switch(eve.target.name){
    case 'userName':
        setUser({...user,userName:eve.target.value})
        setUserErr({...userErr,userNameErr:(eve.target.value.length==0)?'Name is required':(eve.target.value.includes(' '))
        ?'userName not contains spaces ':''})
        break;
    case 'fullName':
        setUser({...user,fullName:eve.target.value})
        setUserErr({...userErr,fullNameErr:(eve.target.value.length==0)?'Name is required':''})
        break;
    case 'email':
        setUser({...user,email:eve.target.value})
        setUserErr({...userErr,emailErr:(eve.target.value.length==0)?'emil is required':(emailRegx.test(eve.target.value)==false)?
        'email must contains @ and .com ':''})
        break;
    case 'password':
        setUser({...user,password:eve.target.value})
        setUserErr({...userErr,passwordErr:(eve.target.value.length==0)?'password is required':(passwordRegx.test(eve.target.value)==false||
         eve.target.value.length<=7)?'password not less than 8 charcter & contains 1uppercase & 1 lowercase & 1 of [*:!#&.?^$#@] ':''})
        break;
    case 'confirmPassword':
        setUser({...user,confirmPassword:eve.target.value})
        setUserErr({...userErr,confirmPasswordErr:(user.password==user.confirmPassword)?'password not matches':''})
        break;
        default:
            return;
    }
   }
   const handelSubmit=(eve)=>{
    eve.preventDefault();
  }
    return (
        <div>
             <Form onSubmit={(eve)=>{handelSubmit(eve)}}>
             <Row>
        <Col>
        <Form.Label>user name</Form.Label>
          <Form.Control name='userName' placeholder="First name" value={user.userName} onChange={(eve)=>{handelForm(eve)}}/>
        <p className='text-danger'>{userErr.userNameErr}</p>
        </Col>
        <Col>
        <Form.Label>full name</Form.Label>
          <Form.Control name='fullName' placeholder="name" value={user.fullName} onChange={(eve)=>{handelForm(eve)}}/>
          <p className='text-danger'>{userErr.fullNameErr}</p>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" value={user.email} onChange={(eve)=>{handelForm(eve)}}/>
          <p className='text-danger'>{userErr.emailErr}</p>
        </Form.Group>
      </Row>

      <Row className="mb-3">

      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" value={user.password} onChange={(eve)=>{handelForm(eve)}}/>
          <p className='text-danger'>{userErr.passwordErr}</p>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>confirm Password</Form.Label>
          <Form.Control name='confirmPassword' type="password" placeholder="Password" value={user.confirmPassword} onChange={(eve)=>{handelForm(eve)}}/>
          <p className='text-danger'>{userErr.confirmPasswordErr}</p>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
      Register
      </Button>
    </Form>
        </div>
    );
}

export default Register;
