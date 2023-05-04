import { List } from "../list"
import './root.css'

export const Root = () => {
    return (
        <div id="list__container">
            <div className='container'>
                <h1 className='title'>List of products</h1>
                <button id="addBtn" onClick={()=>
                    {document.querySelector("#new-item").classList.remove('hide');}}>➕</button>
            </div>
            <List/>
        </div>
    )
}
