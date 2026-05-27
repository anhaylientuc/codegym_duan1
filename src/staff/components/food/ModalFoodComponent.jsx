import { React, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useModalFood } from '../../context/ModalFood';
import { FoodsServices } from '../../../services/FoodServices';
import { FoodGroupsServices } from '../../../services/FoodGroupsServices';
import FormFoodComponent from './FormFoodComponent';
import { uploadCloudinary } from '../../utilities/UploadCloudinary';
const ModalFoodComponent = () => {
    const { show, setshow, id, setid, action } = useModalFood();
    const [initialValues, setinitialValues] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                const res = await FoodsServices.getById(id);
                setinitialValues(res);
            }

        }
        fetchData()
    }, [show])
    function clearData() {
        setid(null)
        setinitialValues({})
    }
    const handleAdd = async (values) => {
        try {
            const imageUrl = await uploadCloudinary(values.image);
            const res = await FoodsServices.insert({ ...values, image: imageUrl });
            setshow(false);
            clearData();

        } catch (error) {
            console.log(error)
        }
    }
    const handleUpdate = async (values) => {
        try {
            const imageUrl = await uploadCloudinary(values.image);
            const { id } = values
            const res = await FoodsServices.update(id, { ...values, image: imageUrl });
            clearData();
            setshow(false);
        } catch (error) {
            console.log(error)
        }
    }
    const handleRemove = async (values) => {
        try {
            const { id } = values
            const res = await FoodsServices.remove(id);
            setshow(false);
            clearData();
        } catch (error) {
            console.log(error)
        }
    }

    const actions = [handleAdd, handleUpdate, handleRemove]
    const title = ['Thêm món ăn', 'Sửa món ăn', 'Xóa món ăn']

    return (
        <Modal show={show}

        >
            <Modal.Header>
                <Modal.Title>{title[action]}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {initialValues && <FormFoodComponent initialValues={initialValues} onSubmit={actions[action]} />}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => {
                    setshow(false)
                    clearData();
                }}>Hủy</Button>
                <Button variant='success' type='submit' form='form-food' >Xác nhận</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalFoodComponent