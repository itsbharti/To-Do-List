import React, { useEffect } from 'react'
import { useState } from 'react';
import CreateTaskPopup from '../modals/CreateTask';
import Card from './Card';


function TodoList() {

  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("taskList")
    
    if(arr){
      let jsonobj = JSON.parse(arr)
      setTaskList(jsonobj)
    }
  },[])

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const updateListArray = (obj,index) => {
      let tempList = taskList
      tempList[index] = obj
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
    }

  const toggle = () => {
    setModal(!modal);
  }

  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList" , JSON.stringify(tempList))
    setTaskList(tempList)
    setModal(false)
  }

  return (
    <>
       <div className='header text-center'>
            <h2> Stay Ahead of Your Day </h2>
            <button onClick={()=> setModal(true)} className='btn btn-primary mt-2' > create task </button>
       </div>
       <div className='task-container'>
          {taskList && taskList.map( (obj, index) =>
           <Card taskObj = {obj} index = {index} 
                 deleteTask= {deleteTask}
                 updateListArray={updateListArray}
           /> )}
       </div>
       <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask}/>
    </>
  )
}

export default TodoList