import React from 'react'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
const FormTableComponent = ({ onSubmit, initialValues }) => {
    const Schema = Yup.object().shape({
        id: Yup.string()
            .required(),
        state: Yup.string()
            .required(),
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
                            value={values.id||''}
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
                        <Form.Label>Trạng thái:</Form.Label>
                        <Form.Control name='state'
                            value={values.state||''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                                touched.state && errors.state
                            }
                        ></Form.Control>
                        <Form.Control.Feedback type='invalid'>
                            Vui lòng nhập!
                        </Form.Control.Feedback>
                    </Form.Group>

                    




                </Form>
            )

            }
        </Formik>
    )
}

export default FormTableComponent