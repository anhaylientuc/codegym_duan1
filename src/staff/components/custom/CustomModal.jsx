import React from 'react'
import { Modal } from 'react-bootstrap'
import CustomForm from './CustomForm'
const CustomModal = ({title,children,show}) => {
  return (
    <Modal show={show}>
        <Modal.Header>
            <h4>{title}</h4>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
    </Modal>
  )
}

export default CustomModal