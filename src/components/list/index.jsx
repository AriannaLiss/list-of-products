import { Component } from "react";
import './list.css'

export class List extends Component {
    
    state = {
        list:[]
    }
    editedTask = -1;

    addTask = () => {
            const newItem = document.querySelector('#new-item-value');

            if (this.editedTask >= 0){
                this.state.list.splice(this.editedTask, 1, newItem.value)
                this.editedTask = -1;
            }else{
                this.state.list.unshift(newItem.value);
            }

            this.setState(state=>state)
            document.querySelector("#new-item").classList.add('hide');
            newItem.value = '';
    }

    editTask = (i) => {
        this.editedTask = i;
        document.querySelector("#new-item").classList.remove('hide');
        document.querySelector("#new-item-value").value = this.isDone(this.state.list[i]) ? this.state.list[i].substring(2) : this.state.list[i];
    }

    deleteTask = (i) => {
        this.state.list.splice(i,1)
        if (this.editedTask == i ) this.editedTask = -1;
        if (this.editedTask > i) this.editedTask--;
        this.setState(state=>state)
    }

    makeItDone = (i) => {    
        this.state.list[i] = this.isDone(this.state.list[i]) ? this.state.list[i].substring(2) : '//'+this.state.list[i] 
        this.setState(state=>state)
    }

    isDone = task => task.substring(0,2)==='//';

    render(){
            return (
            <>
                <div id="new-item" className='hide'>
                    <input id="new-item-value" placeholder="New item"></input>
                    <button onClick={this.addTask}>📀</button>
                </div>
                <ul id="list">
                    {
                        this.state.list.map((li,i) => {
                            return (
                            <li key = {"listItem"+i} className="list-item">
                                {
                                    (this.isDone(li)) 
                                    ? (<p className='done'>{li.substring(2)}</p>)
                                    : (<p>{li}</p>)
                                }        
                                <button onClick={()=>this.editTask(i)}>✍️</button>
                                <button onClick={()=>this.deleteTask(i)}>❌</button>
                                <button onClick={()=>this.makeItDone(i)}>✅</button>
                            </li>);
                        })
                    }
                </ul>
            </>)
    }
}
