import { React, useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useModalFood } from '../../context/ModalFood';
import FormTableComponent from './FormTableComponent';
import { TableServices } from '../../../services/TableServices';
const ModalTableComponent = () => {
  const { show, setshow, id, setid, action } = useModalFood();
  const [initialValues, setinitialValues] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const res = await TableServices.getById(id);
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
      const res = await TableServices.insert(values);
      setshow(false);
      clearData();

    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate = async (values) => {
    try {
      const { id } = values
      const res = await TableServices.update(id,values);
      clearData();
      setshow(false);
    } catch (error) {
      console.log(error)
    }
  }
  const handleRemove = async (values) => {
    try {
      const { id } = values
      const res = await TableServices.remove(id);
      setshow(false);
      clearData();
    } catch (error) {
      console.log(error)
    }
  }

  const actions = [handleAdd, handleUpdate, handleRemove]
  const title = ['Thêm bàn', 'Sửa bàn', 'Xóa bàn']
  return (
    <Modal show={show}

    >
      <Modal.Header>
        <Modal.Title>{title[action]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {initialValues && <FormTableComponent initialValues={initialValues} onSubmit={actions[action]} />}
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

export default ModalTableComponent