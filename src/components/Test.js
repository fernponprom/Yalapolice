import React, {useState} from 'react'
import { UncontrolledCollapse, Button, CardBody, Card, Form, CardHeader } from 'reactstrap';
import { Col, Row, FormGroup, Label, Input, CustomInput, Collapse, ListGroup, ListGroupItem  } from 'reactstrap';

const Test = () => {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [main, setMain] = useState('')
  const [mission, setMission] = useState('')
  return (
    <Form>
        <Label><b></b></Label>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">ชื่อ - นามสกุล</Label>
              <Input type="email" name="name" id="exampleEmail" onChange={(e) => setName(e.target.value)} placeholder="กรุณากรอกคำนำหน้าชื่อ..." bsSize="sm" value={name}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">ตำแหน่ง</Label>
              <Input type="password" name="position" onChange={(e) => setPosition(e.target.value)} id="examplePassword" placeholder="ตำแหน่ง" bsSize="sm"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label>ประธาน</Label>
              <CustomInput type="radio" id="exampleCustomRadio" name="self" label="เข้าด้วยตนเอง" />
              <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="ตัวแทน" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label>ภารกิจ/เหตุขัดข้อง</Label>
              <Input type="password" name="mission" onChange={(e) => setMission(e.target.value)} id="examplePassword" placeholder="ตำแหน่ง" bsSize="sm"/>
            </FormGroup>
          </Col>
        </Row>
        <Button color="success" size="sm">บันทึก</Button>
      </Form>
  )
}

export default Test