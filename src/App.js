import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './Todolist';
import Listitem from './Listitem';

class App extends Component {

  //ใส่ค่า state ที่เป็น อ๊อบเจ็กต์ json ใส่ {}
  constructor(props){
    super(props)
    this.state = {
      todoItems: [], //เมธอด push() จะเพิ่ม array เข้าไปทีล่ะตัวตามหลังไปเรื่อยๆ
    }
    this.addTodo = this.addTodo.bind(this)
  }

  //ฟงก์ชั่น add todo เมื่อเวลามีการกดปุ่มเราจะ set state ใหม่ให้มัน
  addTodo(newTodo){ //ในฟังก์ชั่นเรียก this เราต้อง bind ฟังก์ชั่น เพื่อผูก this เข้ากับ function
   this.setState({
    todoItems: this.state.todoItems.concat([newTodo]) //concat รับพารามิเตอร์ [array] (เมธอด push ใช้ไม่มี)
   })
  }

  render(){
    let {todoItems} = this.state
    return (
      <div>
        <TodoInput onAddTodo={this.addTodo}/>
        <TodoList items={todoItems}/>
        <hr/>
        <Listitem title="Hello Higher-Order Components" body="(HOC) (HOC) (HOC) (HOC) (HOC) (HOC)"/>
      </div>
    );
  }
}

export default App;