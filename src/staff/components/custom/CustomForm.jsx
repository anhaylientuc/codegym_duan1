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
                                    <Form.Group as={Col} key={index} >
                                        <Row className="align-items-center">

                                            <Form.Label md={2} as={Col}>{item.label}:</Form.Label>
                                            <Col md={8}>
                                                <Form.Control name={item.value}

                                                    value={values[item.value]}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isInvalid={
                                                        touched[item.value] && errors[item.value]
                                                    }
                                                ></Form.Control>
                                            </Col>

                                        </Row>

                                    </Form.Group>
                                )
                            })
                        }
                        <Col md={2}>
                            <Button type="submit">
                                SEARCH
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