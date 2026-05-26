import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import Form from 'react-bootstrap/Form';
import { FoodGroupsServices } from '../../services/FoodGroupsServices';
const FormAddFoodGroupsComponent = ({onSubmit}) => {
    const Schema = Yup.object().shape({
        id: Yup.string()
            .required(),
        name: Yup.string()
            .required(),
    });
    return (
        <Formik
            validationSchema={Schema}

            initialValues={{
                id: '',
                name: ''
            }}
            onSubmit={onSubmit}
         


        >
            {({ handleSubmit, handleChange, handleBlur, errors, touched, values }) => (
                <Form onSubmit={handleSubmit} id='form-food-group'>
                    <Form.Group>
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
                            Some of fields are invalid!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
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
                            Some of fields are invalid!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            )

            }
        </Formik>
    )
}

export default FormAddFoodGroupsComponent