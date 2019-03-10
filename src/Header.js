import React, { Component } from 'react'
import App from './App';

class Header extends Component {
    //แยก property -> currentUser ออกจาก อ๊อบเจ็กต์ -> props
    // let { currentUser } แยกตัวแปรออกมาจาก อ๊อบเจ็กต์ this.props
    // ใส่ " " ได้ใน props ที่ต้องการ value เป็น string  (นอกนั้นประกาศ value ตามด้วย { } )
    //ใส่ ( this ) | this.handleHeaderClicked เพื่อผูก function ไว้ใน class เพื่อให้ฟังก์ชั่นนี้ทำงานใน class
    //เราจะเรียกใช้ อ๊อบเจ็ตก์จาก componnent อื่นภายในฟังก์ชั่น เราต้องใช้คำสั่งจาวาสคริป bind() ที่เป็นการผูก this ออบเจ็กต์อื่นเข้ามาใช้ภายในฟังก์ชั่น ประกาศใน ออบเจ็กต์ constructor ()
    //การผูก this เข้ากับ function this.handleHeaderClicked = this.handleHeaderClicked.bind(this) เพื่อใช้ ออบเจ็กต์ตัวอื่นได้ใน class ทั้งหมด เช่น ค่า props ค่า state
    constructor(props)
    {
        super(props)
        this.handleHeaderClicked = this.handleHeaderClicked.bind(this)
    }
    //ส่ง component ตัวลูกกลับไปหาพ่อ 
    handleHeaderClicked(){
        alert("Login user name: " + this.props.currentUser)  
    }
    render(){
        //ประกาศตัวแปร ภายใต้ render() 
        // ตัวดำเนินการเชิงตรรกะ (JavaScript) expr1 && expr2 | (Logical AND) ส่งคืน true ถ้า expr1 และ expr2 ทั้งสอง เป็นจริง
        let { currentUser, isLoggedIn } = this.props
        currentUser = "Logged in as " + currentUser
        // อ๊อบเจ็ตก์ event onClick มี property เป็นเมธอด ( ()=>ฟังก์ชั่นแบบ arrow function ปกติจะเป็นแบบนี้ myFunction:function() )
        return (
            <div>
                <h3 onClick={this.handleHeaderClicked}>
                Hello { isLoggedIn && currentUser }
                </h3>
            </div>
        );
    }
}
export default Header;