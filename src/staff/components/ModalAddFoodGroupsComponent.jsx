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
                <Button variant='secondary' onClick={()=>setshow(!show)}>Hủy</Button>
                {
                    
                }
                <Button variant='warning' onClick={()=>setshow(!show)}>Sửa</Button>
                <Button variant='danger' onClick={()=>setshow(!show)}>Xóa</Button>

                <Button variant='success' type='submit' form='form-food-group'>Thêm</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAddFoodGroupsComponent