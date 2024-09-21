import React, { useState , useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditTaskPopup({modal, toggle , updateTask, taskObj}) {

    const[taskName, setTaskName] = useState('')
    const[description, setDescription] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target;

        if(name === "taskName") {
            setTaskName(value);
        } else{
            setDescription(value);
        }
    }

    const handleUpdate = (e) => {
          e.preventDefault();
          let tempObj = {}
          tempObj ['Name'] =taskName
          tempObj ["Description"] = description
          updateTask(tempObj)
    }

    useEffect( ()=> {
            setTaskName(taskObj.Name)
            setDescription(taskObj.Description)
    },[])

  return (
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                 <form >
                    <div className='form-group'>
                        <label >Task Name</label>
                        <input name='taskName' type='text' value={taskName} className='form-control' onChange={handleChange}/>
                    </div>
                    <div className='form-group mt-2'>
                        <label>Description</label>
                        <textarea name='description' value={description} rows={4} className='form-control'onChange={handleChange}> </textarea>
                    </div>
                 </form>
            </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
                 Update
        </Button>
        <Button color="secondary" onClick={toggle}>
                 Discard
        </Button>
    </ModalFooter>
  </Modal>
  )
}

export default EditTaskPopup