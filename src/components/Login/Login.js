import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Card, Alert } from 'reactstrap'
import firebase from 'firebase/app'
import './Login.css'

const Login = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')
   const [visible, setVisible] = useState(false);

   const onDismiss = () => setVisible(false);
 
 

   const emailLogin = async (e) => {
     e.preventDefault()
     const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => setError(err.code))
     if(user){
       localStorage.setItem('loginState', user.user.email)
       window.location.reload()
     }else{
       setError('กรุณาใส่ชื่อผู้ใช้ และ รหัสผ่านให้ถูกต้อง')
       setVisible(true)
     }
   }

    return (
      <div className="center">
        <div style={{textAlign:'center', marginBottom: "10px"}}>
          <img src="http://localhost:3000/Logo.png" alt="logo" width="250" height="200"/>
        </div>
      <Card style={{padding: '20px'}}>
        <Form>
          <Alert color="danger" isOpen={visible} toggle={onDismiss}>
              {error}
          </Alert>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="กรุณาใส่ชื่อผู้ใช้" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="กรุณาใส่รหัสผ่าน" />
          </FormGroup>
          <div style={{textAlign: 'center'}}>
            <Button color="success" size="sm" onClick={emailLogin}><b>เข้าสู่ระบบ</b></Button>
          </div>
        </Form>
        <div style={{textAlign: 'center'}}>
          หรือ
        </div>
        <div style={{textAlign: 'center'}}>
          <div className="fb-login-button" data-size="medium" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>
        </div>
      </Card>
      </div>
      )
}

export default Login