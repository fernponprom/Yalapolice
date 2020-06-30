import React, {useState, useEffect} from 'react';
import MainNavbar from '../Navbar/MainNavbar'
import { firestore } from '../../index'
import { UncontrolledCollapse, Button, CardBody, Card, Form, CardHeader } from 'reactstrap';
import { Col, Row, FormGroup, Label, Input, CustomInput, Collapse, ListGroup, ListGroupItem  } from 'reactstrap';
import './FormData.css'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs
pdfMake.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew Bold.ttf',
    italics: 'THSarabunNew Italic.ttf',
    bolditalics: 'THSarabunNew BoldItalic.ttf'
  },
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
}


const FormData = () => {

  const [myData, setMyData] = useState([])

  useEffect(() => {
    retriveData()
  }, [])

  const retriveData = () => {
    firestore.collection('information').orderBy('id', 'asc').onSnapshot( (v) => {
      let allData = v.docs.map( index => {
        const { id, place, name, position, main, mission, other } = index.data()

        return { id, place, name, position, main, mission, other }
      })
      setMyData(allData)

    })
  }

  const renderCardInput = () => {
    if(myData){
      return (
        myData.map( (data, index) => {
          return (
            <CardInput data={data} />
          )
        })
      )
    }
  }

  const CardInput = (props) => {
    const { id, place, name, position, main, mission } = props.data
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState('Closed');
  
    const onEntering = () => setStatus('Opening...');
  
    const onEntered = () => setStatus('Opened');
  
    const onExiting = () => setStatus('Closing...');
  
    const onExited = () => setStatus('Closed');
  
    const toggle = () => setCollapse(!collapse);
    return (
      <div>
        <ListGroup>
          <ListGroupItem color="success" onClick={toggle} style={{margin: '10 10 10 10'}} >{place} </ListGroupItem>
        </ListGroup>
        <Collapse
          isOpen={collapse}
          onEntering={onEntering}
          onEntered={onEntered}
          onExiting={onExiting}
          onExited={onExited}
        >
          <Card>
            <CardBody>
              <FormInput data={props.data} />
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }

  const FormInput = (props) => {
    const { data } = props 
    const { id, place, name, position, main, mission, other } = data
    const [fName, setName] = useState(name)
    const [fPosition, setPosition] = useState(position)
    const [fMain, setMain] = useState(main)
    const [fOther, setOther] = useState(other)
    const [fMission, setMission] = useState(mission)
    const [fPlace, setPlace] = useState(place)
    const [state, setState] = useState(false)


    const saveData = (id) => {
      firestore.collection('information').doc(id+'').set({id, name: fName, position: fPosition, main: fMain, mission: fMission, place, other: fOther})
    }

    
    
    
    return (
      <Form>
        <Label><b>{id}. {place}</b></Label>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">ชื่อ - นามสกุล</Label>
              <Input type="text" name="name" id="exampleEmail" defaultValue={name} onChange={e => setName(e.target.value)} placeholder="กรุณากรอกคำนำหน้าชื่อ..." bsSize="sm"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">ตำแหน่ง</Label>
              <Input type="text" name="position" defaultValue={position} onChange={(e) => setPosition(e.target.value)} id="examplePassword" placeholder="ตำแหน่ง" bsSize="sm"/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <FormGroup>
            <Label>ประธาน</Label>
            <FormGroup check inline style={{ marginLeft: '10px'}}>
              <Label check>
                <Input type="checkbox" onChange={ e => setMain(!fMain)} defaultChecked={main}/> เข้าด้วยตนเอง
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" onChange={ e => setOther(!fOther)} defaultChecked={other}/> ตัวแทน
              </Label>
            </FormGroup>
          </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label>ภารกิจ/เหตุขัดข้อง</Label>
              <Input type="text" name="mission" defaultValue={mission} onChange={(e) => setMission(e.target.value)} id="examplePassword" placeholder="ตำแหน่ง" bsSize="sm"/>
            </FormGroup>
          </Col>
        </Row>
        <Button color="success" size="sm" onClick={() => saveData(id)}>บันทึก</Button>
      </Form>
    )
  }

  const printPDF = () => {
    console.log(myData)
    let docDefinition = {
      content: [
        { text: 'สถานภาพการเข้าร่วมประชุมทางไกล ประจำวันที่....เดือน........... พ.ศ ๒๕๖๓', style: 'header'},
        { 
          style: 'tableExample',
          table: {
            widths: [20, 100, 20, 20, 160, 100, 40],
            body: [
              [{text:'ลำดับ',style: 'tableHeader'}, {text:'ภ.จว.ยะลา', style: 'tableHeader'}, {text:'เข้า',style: 'tableHeader'}, {text:'ไม่เข้า', style: 'tableHeader'}, {text:'ยศ ชื่อ สกุล', style: 'tableHeader'}, {text:'ภารกิจ/ขัดข้อง',style: 'tableHeader'}, {text:'หมายเหตุ', style: 'tableHeader'}],
              [{text:'๑', alignment:'center'}, {text:'ยะลา ๑'}, ' ', ' ', ' ', ' ', ' '],
              [{text:'๒', alignment:'center'}, {text:'ยะลา ๒'}, ' ', ' ', ' ', ' ', ' '],
              [{text: '๓', alignment:'center'}, {text:'ยะลา ๓'}, ' ', ' ', ' ', ' ', ' '],
              [{text: '๔', alignment:'center'}, {text:'ยะลา ๔'}, ' ', ' ', ' ', ' ', ' '],
              [{text:'๕', alignment:'center'}, {text:'ยะลา ๕'}, ' ', ' ', ' ', ' ', ' '],
              [{text:'๖', alignment:'center'}, {text:'ยะลา ๕'}, ' ', ' ', ' ', ' ', ' '],
              [{text:'๗', alignment:'center'}, {text:'ยะลา ๗'}, ' ', ' ', ' ', ' ', ' '],
              [{text:'๘', alignment:'center'}, {text:'กก.สส.ภ.จว.ยะลา'}, ' ', ' ', ' ', ' ', ' '],
              [{text: '๙', alignment:'center'}, {text:'กลุ่มงานสอบสวน'}, ' ', ' ', ' ', ' ', ' '],
              [{text: '๑๐', alignment:'center'}, {text:'กก.ปพ.ภ.จว.ยะลา'}, ' ', ' ', ' ', ' ', ' '],
              [{text:'๑๑', alignment:'center'}, {text:'กก.ฝอ.จว.ยะลา'}, ' ', ' ', ' ', ' ', ' '],
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: [20, 50, 25, 25, 160, 140, 40],
            body: [
              [{text:'ลำดับ', style: 'tableHeader'}, {text:'หน่วย', style: 'tableHeader'}, {text:'หัวหน้า', style: 'tableHeader'}, {text:'ผู้แทน', style: 'tableHeader'}, {text:'ภารกิจ/ขัดข้อง', style: 'tableHeader'}, {text:'ยศ ชื่อ สกุล ผู้แทน', style: 'tableHeader'}, {text:'หมายเหตุ', style: 'tableHeader'}],
              [{text:'๑', alignment:'center'}, `${myData[0].place}`, {text:`${myData[0].main?'/':''}`, alignment: 'center'}, {text:`${myData[0].other?'/':''}`, alignment: 'center'}, `${myData[0].mission}`, `${myData[0].name}`, ' '],
              [{text:'๒', alignment:'center'}, `${myData[1].place}`, {text:`${myData[1].main?'/':''}`, alignment: 'center'}, {text:`${myData[1].other?'/':''}`, alignment: 'center'}, `${myData[1].mission}`, `${myData[1].name}`, ' '],
              [{text: '๓', alignment:'center'}, `${myData[2].place}`, {text:`${myData[2].main?'/':''}`, alignment: 'center'}, {text:`${myData[2].other?'/':''}`, alignment: 'center'}, `${myData[2].mission}`, `${myData[2].name}`, ' '],
              [{text: '๔', alignment:'center'}, `${myData[3].place}`, {text:`${myData[3].main?'/':''}`, alignment: 'center'}, {text:`${myData[3].other?'/':''}`, alignment: 'center'}, `${myData[3].mission}`, `${myData[3].name}`, ' '],
              [{text: '๕', alignment:'center'}, `${myData[4].place}`, {text:`${myData[4].main?'/':''}`, alignment: 'center'}, {text:`${myData[4].other?'/':''}`, alignment: 'center'},`${myData[4].mission}`, `${myData[4].name}`, ' '],
              [{text: '๖', alignment:'center'}, `${myData[5].place}`, {text:`${myData[5].main?'/':''}`, alignment: 'center'}, {text:`${myData[5].other?'/':''}`, alignment: 'center'}, `${myData[5].mission}`, `${myData[5].name}`, ' '],
              [{text:'๗', alignment:'center'}, `${myData[6].place}`, {text:`${myData[6].main?'/':''}`, alignment: 'center'}, {text:`${myData[6].other?'/':''}`, alignment: 'center'}, `${myData[6].mission}`, `${myData[6].name}`, ' '],
              [{text:'๘', alignment:'center'}, `${myData[7].place}`, {text:`${myData[7].main?'/':''}`, alignment: 'center'}, {text:`${myData[7].other?'/':''}`, alignment: 'center'}, `${myData[7].mission}`, `${myData[7].name}`, ' '],
              [{text: '๙', alignment:'center'}, `${myData[8].place}`, {text:`${myData[8].main?'/':''}`, alignment: 'center'}, {text:`${myData[8].other?'/':''}`, alignment: 'center'}, `${myData[8].mission}`, `${myData[8].name}`, ' '],
              [{text: '๑๐', alignment:'center'}, `${myData[9].place}`, {text:`${myData[9].main?'/':''}`, alignment: 'center'}, {text:`${myData[9].other?'/':''}`, alignment: 'center'}, `${myData[9].mission}`, `${myData[9].name}`, ' '],
              [{text: '๑๑', alignment:'center'}, `${myData[10].place}`, {text:`${myData[10].main?'/':''}`, alignment: 'center'}, {text:`${myData[10].other?'/':''}`, alignment: 'center'}, `${myData[10].mission}`, `${myData[10].name}`, ' '],
              [{text:'๑๒', alignment:'center'}, `${myData[11].place}`, {text:`${myData[11].main?'/':''}`, alignment: 'center'}, {text:`${myData[11].other?'/':''}`, alignment: 'center'}, `${myData[11].mission}`, `${myData[11].name}`, ' '],
              [{text:'๑๓', alignment:'center'}, `${myData[12].place}`, {text:`${myData[12].main?'/':''}`, alignment: 'center'}, {text:`${myData[12].other?'/':''}`, alignment: 'center'}, `${myData[12].mission}`, `${myData[12].name}`, ' '],
              [{text:'๑๔', alignment:'center'}, `${myData[13].place}`, {text:`${myData[13].main?'/':''}`, alignment: 'center'}, {text:`${myData[13].other?'/':''}`, alignment: 'center'}, `${myData[13].mission}`, `${myData[13].name}`, ' '],
              [{text:'๑๕', alignment:'center'}, `${myData[14].place}`, {text:`${myData[14].main?'/':''}`, alignment: 'center'}, {text:`${myData[14].other?'/':''}`, alignment: 'center'}, `${myData[14].mission}`, `${myData[14].name}`, ' '],
              [{text:'๑๖', alignment:'center'}, `${myData[15].place}`, {text:`${myData[15].main?'/':''}`, alignment: 'center'}, {text:`${myData[15].other?'/':''}`, alignment: 'center'}, `${myData[15].mission}`, `${myData[15].name}`, ' '],
              [{text:'๑๗', alignment:'center'}, `${myData[16].place}`, {text:`${myData[16].main?'/':''}`, alignment: 'center'}, {text:`${myData[16].other?'/':''}`, alignment: 'center'}, `${myData[16].mission}`, `${myData[16].name}`, ' '],
              [{text:'๑๘', alignment:'center'}, `${myData[17].place}`, {text:`${myData[17].main?'/':''}`, alignment: 'center'}, {text:`${myData[17].other?'/':''}`, alignment: 'center'}, `${myData[17].mission}`, `${myData[17].name}`, ' ']
            ]
          }
        }
      ],
      styles: {
        header: {
          alignment: 'center',
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          alignment: 'center',
          bold: true,
          color: 'black'
        }
        
      },
      defaultStyle: {
        font: 'THSarabunNew'
      }
    }
    pdfMake.createPdf(docDefinition).open()
  }

  return (
    <div>
      <MainNavbar />
      <div className="form-data">
        <Card style={{ padding: '10px'}}>
        <CardHeader style={{ marginBottom: '10px'}}>
        <div style={{ margin: '10 10 10 10', textAlign: 'center'}}>
          <h4><b>กรอกข้อมูลการประชุม</b></h4>
          <span>เจ้าของเรื่อง ภ.จว.ยะลา</span>
          <Button color="warning" onClick={printPDF} size="sm" style={{marginLeft: '10px'}}><ion-icon name="print-sharp"></ion-icon></Button>
        </div>
        </CardHeader>
          {renderCardInput()}
        </Card>
      </div>
    </div>
  )
}

export default FormData

