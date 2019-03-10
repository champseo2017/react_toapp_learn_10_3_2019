import React, { Component } from 'react'

class Footer extends Component {
//การเซตค่า state เราจะเซตที่ constructor (ก่อน render)
//การแก้ไขค่า state ใช้ เมธอด setState()
//ประกาศฟังก์ชั่นก่อน render ()
     constructor(props){
         super(props)
         this.state = {
            time: 0
         }
         //setInterval ( function_name, timestamp );
         // ใช้ตั้งเวลาให้พังก์ชันทำงาน โดยจะทำงานวนซ้ำไปเรื่อยๆเมื่อถึงเวลาที่กำหนด
         // ( หน่วยของเวลาคือ มิลลิวินาที โดย 1 นาที = 1000 มิลลิวินาที )
         setInterval(()=>{  //ประกาศฟังก์ชั่นในอ๊อบเจ็กต์ constructor
            this.setState({ //ประกาศฟังก์ชั่น setState ในอ๊อบเจ็กต์
                time: this.state.time + 1//แก้ไข property time ใน ออบเจ็กต์ state ให้ +1
            })
         },1000)
     }

    render(){
        //แยก property -> time ออกจาก อ๊อบเจ็กต์ -> state
        let {time} = this.state
        // รับ property onTimerClick ที่ส่งมาจาก component app.js ใน property onTimerClick มีค่า state currentTime ที่ส่งมาด้วย
        let {onTimerClick} = this.props
        // state คือ ลูกจะจำไว้กับตัวเอง ( children )
        // props คือ พ่อ -> ส่งค่า props -> ให้ลูก ( children )
        let divStyle = {
            cursor: 'pointer',
           
          };
        return (
            <div>
                <h4 style={divStyle} onClick={()=>onTimerClick(time)} >Footer Online Time { time }</h4>
            </div>
        );
    }
}
export default Footer;