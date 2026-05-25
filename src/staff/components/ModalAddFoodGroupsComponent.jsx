import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import FormAddFoodGroupsComponent from './FormAddFoodGroupsComponent'
import { FoodGroupsServices } from '../../services/FoodGroupsServices'
const ModalAddFoodGroupsComponent = ({ show, action,setshow }) => {
    const handleSubmit =async (values) => {
        try {
            const res = await FoodGroupsServices.insert(values);
            setshow(false);
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Thêm nhóm món</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormAddFoodGroupsComponent onSubmit={handleSubmit}/>
            </Modal.Body>
            <Modal.Footer>
                <Button >Cancel</Button>
                <Button type='submit' form='form-food-group'>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAddFoodGroupsComponent