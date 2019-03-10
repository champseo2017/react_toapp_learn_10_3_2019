import React, { Component }from "react"

class TodoInput extends Component {
    //เก็บค่า todo โดยการ setstate
    constructor(props){
        super(props)
        this.state = {
            newTodo: ""
        }
        this.event_onchange = this.event_onchange.bind(this)
        this.addClicked = this.addClicked.bind(this)
    }
    event_onchange (e)
    {
        this.setState({
            newTodo: e.target.value // get value ของ input เมื่อมีการ onChange ( e พารามิเตอร์ target ที่ไหน )
        })
    }
    addClicked ()
    {
        let {onAddTodo} = this.props
        let {newTodo} = this.state
        onAddTodo(newTodo)
        this.setState({
            newTodo: ""
        })
    }
// บอกให้ input รู้ว่ามีค่า value เท่ากับ state
    render (){
        let {newTodo} = this.state
        return( 
            <div>
                Add Todo <input value={newTodo} onChange={this.event_onchange}/> 
                <button onClick={this.addClicked}>Add</button>
            </div>
        );
    }
}

export default TodoInput;