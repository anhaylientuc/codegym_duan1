import { useEffect, React, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import FormAddFoodGroupsComponent from './FormFoodGroupsComponent'
import { FoodGroupsServices } from '../../../services/FoodGroupsServices'
import { useModalType } from '../../context/ModalType'
const ModalAddFoodGroupsComponent = () => {
    const { show, setshow, id, setid, action } = useModalType();
    const [initialValues, setinitialValues] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const data = await FoodGroupsServices.getById(id);
                console.log(data)
                setinitialValues(data)
            }
        }
        fetchData();

    }, [show])
    function clearData() {
        setid(null)
        setinitialValues({})
    }
    const handleAdd = async (values) => {
        try {
            console.log(values)
            const res = await FoodGroupsServices.insert(values);
            setshow(false);
            clearData();

        } catch (error) {
            console.log(error)
        }
    }
    const handleUpdate = async (values) => {
        try {
            console.log(values)
            const { id } = values
            const res = await FoodGroupsServices.update(id, values);
            clearData();
            setshow(false);
        } catch (error) {
            console.log(error)
        }
    }
    const handleRemove = async (values) => {
        try {
            const { id } = values
            const res = await FoodGroupsServices.remove(id, values);
            setshow(false);
            clearData();
        } catch (error) {
            console.log(error)
        }
    }
    const actions = [handleAdd, handleUpdate, handleRemove]
    console.log(actions[action])
    const title = ['Thêm nhóm', 'Sửa nhóm', 'Xóa nhóm']
    return (
        <Modal show={show}

        >
            <Modal.Header>
                <Modal.Title>{title[action]}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {initialValues && <FormAddFoodGroupsComponent initialValues={initialValues} onSubmit={actions[action]} />}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => {
                    setshow(false)
                    clearData();
                }}>Hủy</Button>
                <Button variant='success' type='submit' form='form-food-group' >Xác nhận</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAddFoodGroupsComponent