import React from 'react';
import { useGlobalContext} from '../context/GlobalState';
import './Modal.css';

const showUserInfo = (closeModal, handleDelete, userKey) => {   

        return (    
        <>
            <button className='modal-button' onClick={() => {handleDelete(userKey)}}>Yes</button>
            <button className='modal-button' onClick={closeModal}>No</button>
        </>    
    )
}

function Modal() {

    const globalContext = useGlobalContext();
    const {        
        userClicked,
        handleDelete,
        userKey,
        closeModal,
    } = globalContext;
    
    return (userClicked) ? (
        <div className='modal'>
            <div className='modal-inner'>
                { showUserInfo(closeModal, handleDelete, userKey) }
            </div>
        </div>
    ) : "";
} 

export default Modal