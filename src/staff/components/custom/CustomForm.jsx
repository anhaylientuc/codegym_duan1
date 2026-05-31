import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import Form from 'react-bootstrap/Form';
import { useModalType } from '../../context/ModalType';
import { FoodGroupsServices } from '../../../services/FoodGroupsServices';
import { Button, Col, Container, Row } from 'react-bootstrap';
const CustomForm = ({ fields, onSubmit }) => {
    //  const Schema = Yup.object().shape({
    //         id: Yup.string()
    //             .required(),
    //         name: Yup.string()
    //             .required(),
    //     });
    return (
        <Formik
            // validationSchema={Schema}

            initialValues={fields && fields.reduce((obj, item) => {
                obj[item.value] = ''
                return obj;
            }, {})}
            onSubmit={onSubmit}
            enableReinitialize


        >
            {({ handleSubmit, handleChange, handleBlur, errors, touched, values }) => (
                <Form
                    onSubmit={handleSubmit}
                // id='form-food-group'
                >
                    <Row>
                        {
                            fields && fields.map((item, index) => {
                                return (
                                    <Form.Group as={Col} key={index} className='custom-form-group'>

                                        <Form.Label >{item.label}:</Form.Label>

                                        <Form.Control name={item.value}

                                            value={values[item.value]}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isInvalid={
                                                touched[item.value] && errors[item.value]
                                            }
                                        ></Form.Control>




                                    </Form.Group>
                                )
                            })
                        }
                        <Col >
                            <Button type="submit">
                                Tìm kiếm
                            </Button>
                        </Col>

                    </Row>

                </Form>
            )

            }
        </Formik>
    )
}

export default CustomForm