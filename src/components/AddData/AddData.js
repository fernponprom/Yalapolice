import React from 'react'
import './AddData.css'
import { Row, Col, Container } from 'react-bootstrap'

export default () => {
  return (
    <div className="content">
<form>
    <h1>กรอกข้อมูลการประชุม</h1>
        <div className="align2">
            <div className="align1"> 
    <h2>เจ้าของเรื่อง ภ.จว.ยะลา</h2>

    <h3>1. สภ.เมืองยะลา</h3>
    <Row lg={12}>
        <Col xs={4}>
            <div className="div1">
                <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
            </div>
        </Col>
        <Col xs={8}>
            <div className="div2">
                <input type="text" placeholder="ตำแหน่ง"/>
            </div>
        </Col>
        <Col xs={12}>
          <p>ประธาน</p>
        </Col>
        <Col xs={12}>
          <label class="container">หัวหน้าเข้าด้วยตนเอง
            <input type="radio" name="radio"></input>
            <span class="checkmark"></span>
          </label>
          <label class="container">ตัวแทน
            <input type="radio" name="radio"></input>
            <span class="checkmark"></span>
          </label>
        </Col>
        <Col xs={1}>
          <p>ภารกิจ/ขัดข้อง</p> 
        </Col>
        <Col xs={4}>
          <input type="text" placeholder="โปรดระบุ" className="mission-text"/>
        </Col>
        <Col>
          <input className="submit-button" type='submit'/>
        </Col>
    </Row>
        
    <h3>2. สภ.เบตง</h3>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>
    <div className="div2">
        <input type="text" placeholder="ตำแหน่ง"/>
    </div>
        <div className="align3">
            <p>ประธาน</p>
                <label class="container">หัวหน้าเข้าด้วยตนเอง
                <input type="radio" name="radio"></input>
                <span class="checkmark"></span>
                </label>
                <label class="container">ตัวแทน
                <input type="radio" name="radio"></input>
                <span class="checkmark"></span>
                </label>
    <p>ภารกิจ/ขัดข้อง</p> 
    <div className="div2">
        <input type="text" placeholder="โปรดระบุ"/>
    </div>
    </div>

    <h3>3. สภ.รามัน</h3>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>4. สภ.ยะหา</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>5. สภ.บันนังสตา</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>6. สภ.ธารโต</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>7. สภ.กาบัง</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>8. สภ.กรงปินัง</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>9. สภ.ลำใหม่</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>10. สภ.ยะรม</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>11. สภ.อัยเยอร์เวง</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>12. สภ.จะกว๊ะ</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>13. สภ.โกตาบารู</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>14. สภ.ปะแต</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>15. สภ.แม่หวาด</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>16. สภ.ตาเซะ</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>17. สภ.ท่าธง</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>

    <p>18. สภ.บาตูตาโมง</p>
    <div className="div1">
    <input type="text" placeholder="ยศ ชื่อ ชื่อสกุล"/>
    </div>
            </div>
        </div>
    </form>
    </div>

  )
}
