import React, {Component} from 'react';
import Todoitem from './Todoitem';
 
//array.map(function(currentValue, index, arr), thisValue)
class TodoList extends Component {
    render (){
        let {items} = this.props
        return(
            <div>
                <ul>
                    {
                        items.map((todo, i) =>
                        <li key={i}><Todoitem text={todo}/></li>
                        
                        )
                    } 
                </ul>
            </div>
        );
    }
}
export default TodoList;