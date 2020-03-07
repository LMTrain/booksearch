import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router'
import Modal from './Modal'
import NoteForm from './NoteForm'




const AddNote = (props) => {
    let modal = null   
 
    
    return (
        <div>
            <Modal ref={ele => modal = ele } hasSubmit={false}>
                <NoteForm />
            </Modal>
           
        </div>
    )
}

export default AddNote