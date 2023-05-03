import { Add } from "../add"
import { List } from "../list"
import './root.css'

export const Root = () => {
    return (
        <div id="list__container">
            <h1>List of products</h1>
            <Add/>
            <List/>
        </div>
    )
}
