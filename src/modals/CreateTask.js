import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTaskPopup({modal, toggle , save}) {

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

    const handleSave = () => {
        if (!taskName.trim()) {
            alert("Oops! Please name your task!");
            return;
        }

        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        
        save(taskObj);
    }

  return (
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                 <form >
                    <div className='form-group'>
                        <label >Task Name</label>
                        <input name='taskName' type='text' className='form-control' onChange={handleChange}/>
                    </div>
                    <div className='form-group mt-2'>
                        <label>Description</label>
                        <textarea name='description' rows={4} className='form-control'onChange={handleChange}> </textarea>
                    </div>
                 </form>
            </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={handleSave}>
                 Create
        </Button>
        <Button color="secondary" onClick={toggle}>
                 Discard
        </Button>
    </ModalFooter>
  </Modal>
  )
}

export default CreateTaskPopup