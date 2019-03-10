import React, {Component} from 'react';
import styled from  'styled-components';

const Text = styled.span`
      font-size: 25px;
      color: ${props => (props.completed ? 'red' : 'black')};
`

class Todoitem extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            done: false
        }
        this.toggle = this.toggle.bind(this)
    }
        toggle () {
            this.setState({
                done: !this.state.done
            })
        }
    render(){
        //เมธอด render() เหมือนฟังก์ชั่นธรรมดา เราสามารถใส่ if else ได้ ฟงก์ชั่น reander จะต้อง return สิ่งที่จะวาดออกมาเป็นหน้าตา ก็คือ
        //ต้อง return ค่าออกมา
        let {text} = this.props
        let {done} = this.state
       
        return(
            <div>
                <input type="checkbox" value={done} onClick={this.toggle}/>
                <Text completed={this.state.done}>{text}</Text>
            </div>
        );
    }
}
export default Todoitem