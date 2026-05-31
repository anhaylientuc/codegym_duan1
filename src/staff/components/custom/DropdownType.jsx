import { React, useEffect, useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { useModalFood } from '../../context/ModalFood'
import { FoodGroupsServices } from '../../../services/FoodGroupsServices'
const DropdownType = ({ handleSubmit, handleChange, setFieldValue, handleBlur, errors, touched, values }) => {
    const [types, settypes] = useState([])
    const { show } = useModalFood()
    useEffect(() => {
        const fetchData = async () => {
            const res = await FoodGroupsServices.getAll();
            settypes(res)
        }
        fetchData();
    }, [show])
    return (
        <Form.Group className='custom-form-group'>

            <Form.Label>Nhóm món:</Form.Label>


            <Form.Select name='unit'
                value={values.unit}
                onChange={(e) => {
                    handleChange(e)
                    const selected = types.find(item => item.id == e.target.value)
                    setFieldValue('type', selected.name)
                }

                }
                onBlur={handleBlur}
                isInvalid={
                    touched.unit && errors.unit
                }


            >
                <option value="">
                    Chọn loại món
                </option>
                {

                    types.map((item, index) => {
                        return (
                            <option key={index} value={item.id}>
                                {item.name}
                            </option>
                        )
                    })
                }
            </Form.Select>
            <Form.Control.Feedback type='invalid'>
                Vui lòng nhập!
            </Form.Control.Feedback>





        </Form.Group>
    )
}

export default DropdownType