import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { React, useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { Image, Row, Col } from 'react-bootstrap';
import { FoodGroupsServices } from '../../../services/FoodGroupsServices';
import DropdownType from '../custom/DropdownType';
import { uploadCloudinary } from '../../utilities/UploadCloudinary';
import { useModalFood } from '../../context/ModalFood';

const FormFoodComponent = ({ onSubmit, initialValues }) => {

    const [preview, setpreview] = useState(null)
    useEffect(() => {

        const fetchData = () => {
            console.log(initialValues)
            if (initialValues.image)
                setpreview(initialValues.image)
        }
        fetchData()
    }, [initialValues])
    const Schema = Yup.object().shape({
        id: Yup.string()
            .required(),
        name: Yup.string()
            .required(),
        price: Yup.number()
            .typeError('Please enter a number').
            required(''),
        image: Yup.string()
            .required('Please choose image'),
        unit: Yup.string()
            .required('Please choose type'),
        type: ''
    });
    return (
        <Formik
            validationSchema={Schema}
            initialValues={initialValues}
            onSubmit={onSubmit}
            enableReinitialize


        >
            {({ handleSubmit, handleChange, handleBlur, setFieldValue, errors, touched, values }) => (
                <Form onSubmit={handleSubmit} id='form-food' >
                    <Form.Group className='custom-form-group'>
                        <Form.Label>Mã:</Form.Label>
                        <Form.Control name='id'
                            value={values.id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.id && errors.id
                            }
                        ></Form.Control>
                        <Form.Control.Feedback type='invalid'>
                            Vui lòng nhập!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='custom-form-group'>
                        <Form.Label>Tên:</Form.Label>
                        <Form.Control name='name'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.name && errors.name
                            }
                        ></Form.Control>
                        <Form.Control.Feedback type='invalid'>
                            Vui lòng nhập!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='custom-form-group'>
                        <Form.Label>Giá:</Form.Label>
                        <Form.Control name='price'
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.price && errors.price
                            }
                        ></Form.Control>
                        <Form.Control.Feedback type='invalid'>
                           Vui lòng nhập!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <DropdownType 
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        setFieldValue={setFieldValue}
                        errors={errors}
                        touched={touched}
                        values={values}

                    />

                    <Form.Group className='custom-form-group'>
                        <Form.Label>Hình ảnh:</Form.Label>
                        <Row>
                            <Col>
                                {preview && <Image src={preview} width={120} />}
                            </Col>
                            <Col>
                                <Form.Control

                                    type='file'
                                    name="image"
                                    onChange={async (e) => {
                                        const file = e.target.files[0];

                                        if (!file) return;

                                        // preview
                                        setpreview(URL.createObjectURL(file));

                                        // set vào formik
                                        setFieldValue("image", file);
                                    }}
                                />
                            </Col>
                        </Row>

                    </Form.Group>
                </Form>
            )

            }
        </Formik>
    )
}

export default FormFoodComponent