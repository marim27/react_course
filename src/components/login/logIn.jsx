import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const LogIn = () => {

    const [user,setUser]= useState({
        email:'',
        password:'',
       })

       const [userErr,setUserErr]= useState({
        emailErr:'',
        passwordErr:''
       })

    const emailRegx=/^[a-zA-Z0-9]{4,15}(@)(gmail|yahoo|outlook)(.com)$/
    const loginForm=(eve)=>{
        switch(eve.target.name){
            case 'email':
                setUser({...user,email:eve.target.value})
                setUserErr({...userErr,emailErr:(eve.target.value.length==0)?'emil is required':
                (emailRegx.test(eve.target.value)==false)? 'email must contains @ and .com ':''})
                break;
            case 'password':
                setUser({...user,password:eve.target.value})
                setUserErr({...userErr,passwordErr:(eve.target.value.length==0)?'password is required':
                (eve.target.value.length<=7)? 'password not less than 8 charcter':''})
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
            {/*/////////////////////////////////////////////Email */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className={`${(userErr.emailErr)?'border-danger shadow-none':'border-success'}`}
           name='email' type="email" placeholder="Enter email" onChange={(eve)=>{loginForm(eve)}}/>
          <p className='text-danger'>{userErr.emailErr}</p>
        </Form.Group>
        {/*//////////////////////////////////////////////// password */}
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className={`${(userErr.emailErr)?'border-danger shadow-none':'border-success'}`} 
          name='password' type="password" placeholder="Password" onChange={(eve)=>{loginForm(eve)}}/>
          <p className='text-danger'>{userErr.passwordErr}</p>
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        log in
      </Button>
    </Form>
        </div>
    );
}

export default LogIn;
