import React from 'react'
import Card from './Card'

function DoneImg(props){

    if(props.done) {
        return (<img alt="done" src="/meus_png_publicos/undone.png" width="20" height="20"></img>) }  
        else { return (<img alt="undone" src="/meus_png_publicos/done.png" width="20" height="20"></img>)

      }
    

}


function ListItem(props) {


    return(<li >
            <Card className={props.item.done?"done item" : "item" }>
                {props.item.text}
                <div>
                    <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={()=>{ props.onItemDeleted(props.item)}}><img alt="delete" src="/meus_png_publicos/trash.png" width="20" height="20"></img></button>
                </div>
            </Card>
        </li>)

}


export default ListItem;