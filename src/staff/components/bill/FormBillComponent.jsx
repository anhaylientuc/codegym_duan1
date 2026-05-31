import React from 'react'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Row, Col, Button, Container, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import CustomDate from '../custom/CustomDate';
const FormBillComponent = ({ onSubmit }) => {
    return (
        <Formik
            // validationSchema={Schema}

            initialValues={{
                id: '',
                from: '',
                to: ''
            }}
            onSubmit={onSubmit}
            enableReinitialize


        >
            {({ handleSubmit, handleChange, handleBlur, errors, touched, values, setFieldValue }) => (
                <Form
                    onSubmit={handleSubmit}
                // id='form-food-group'
                >
                    <Row>
                        <Col>
                            <Form.Group className='custom-form-group'>
                                <Form.Label >Số hóa đơn:</Form.Label>
                                <Form.Control name={'id'}
                                    value={values.id}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={
                                        touched.id && errors.id
                                    }
                                ></Form.Control>
                            </Form.Group>
                        </Col>
                        <CustomDate values={values} setFieldValue={setFieldValue} />

                        <Col>
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

export default FormBillComponent