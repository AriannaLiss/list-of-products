import { Component } from "react";
import { newTask } from "../../methods";
import './add.css'

export class Add extends Component {
    render(){
        return(
            <button id="addBtn" onClick={newTask}>➕</button>
        )
    }
}
