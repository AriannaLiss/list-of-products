import { Component } from "react";
import { hideInput } from "../../methods";
import './list.css'

export class List extends Component {
    state = {
        list:[]
    }

    addTask = () => {
            console.log(this.state.list);
            const newItem = document.querySelector('#new-item-value');
            this.state.list.push(newItem.value);
            console.log(this.state.list);
            this.setState(state=>{return{...state}})
            hideInput();
            
    }
    array = () => {
        const listmap = [1,3,4];
        let array = '';
        if (this.state.list){
            array = this.state.list.map((li,i) => {
                return (
                <li key = {"listItem"+i} className="list-item">
                    <p>{li}</p>        
                    <button>✍️</button>
                    <button>❌</button>
                    <button>✅ </button>
                </li>);
            })
        }
        return array;
    }

    render(){
            return (<>
                <div id="new-item" className='hide'>
                    <input id="new-item-value" placeholder="New item"></input>
                    <button onClick={this.addTask}>📀</button>
                </div>
                <ul id="list">
                    {
                       this.array() 
                    }
                </ul>
            </>)
    }
}
