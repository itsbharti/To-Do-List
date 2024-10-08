import React, { useState } from 'react'
import EditTask from '../modals/EditTask'

function Card({taskObj,index, deleteTask, updateListArray}) {

    const [modal, setModal] = useState(false)

    const handleDelete = () => {
            deleteTask(index)
    }

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal)
    }

    const updateTask = (obj) => {
        updateListArray(obj, index )
    }

  return (
    <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"background-color": colors[index%5].secondaryColor , "border-radius":"5px", fontWeight:"500"}}>{taskObj.Name}</span>
                <p className = "mt-3 ">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i onClick = {() => setModal(true)} className = "far fa-edit " style={{"color" : colors[index%5].primaryColor , "marginRight": "15px"}}></i>
                    <i onClick={handleDelete} className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} ></i>
                </div>
        </div>
                 <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
  )
}

export default Card


// onClick = {handleDelete}