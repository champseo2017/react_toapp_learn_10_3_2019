import React, { Component } from 'react'
import withBorder from './hoc/withBorder';
import withAlert from './hoc/withAlert';

class Listitem extends Component {

    constructor(props){
        super(props);
    }

    render(){

        let {title} = this.props;
        let {body} = this.props;
    
        return (
                <div>
                    <h4 onClick={() => this.props.alert(title)}>

                    {title}

                    </h4>

                    <p>{body}</p>

                </div>
            );
        }
    }
export default withAlert(withBorder(Listitem)); // compose function