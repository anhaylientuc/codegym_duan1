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



                        <Form.Group as={Col} md={3}  >
                            <Stack direction='horizontal' gap={2} >
                                <Form.Label >Số hóa đơn:</Form.Label>
                               
                                    <Form.Control name={'id'}
                                        value={values.id}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={
                                            touched.id && errors.id
                                        }
                                    ></Form.Control>

                            </Stack>

                        </Form.Group>
                        <Col md={5}>
                            <CustomDate values={values} setFieldValue={setFieldValue} />

                        </Col>

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

export default FormBillComponent