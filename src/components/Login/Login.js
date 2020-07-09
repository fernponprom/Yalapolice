import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Card, Alert } from 'reactstrap'
import firebase from 'firebase/app'
import { provider, firestore } from '../../index'
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
       console.log(user.user.uid)
       const { email, uid } = user.user
       const checkRole = await firestore.collection('users').doc(uid).get()
       const { role } = checkRole.data()
       localStorage.setItem('loginState', email)
       localStorage.setItem('role', role)
        window.location.reload()
     }else{
       setError('กรุณาใส่ชื่อผู้ใช้ และ รหัสผ่านให้ถูกต้อง')
       setVisible(true)
     }
   }

   const loginWithFacebook = async () => {
     await firebase.auth().signInWithPopup(provider).then(async (result) => {
       let token = result.credential.accessToken
       let user = result.user
       console.log(user)
       localStorage.setItem('loginState', user.displayName)
       window.location.reload()
     }).catch(e => {
       console.log(e.code)
       console.log(e.message)
     })
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
          <button className="loginBtn loginBtn--facebook" onClick={ () => loginWithFacebook() }>Login with Facebook</button>
        </div>
      </Card>
      </div>
      )
}

export default Login