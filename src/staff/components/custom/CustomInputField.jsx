import React from 'react'
import { useField } from 'formik'
import { Form, Row, Col } from 'react-bootstrap'
const CustomInputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <Form as={Row} >
            <Form.Label>
                {label}
            </Form.Label>
            <Col>
                <Form.Control
                    {...field}
                    {...props}
                    isInvalid={meta.touched && meta.error}
                >
                    <Form.Control.Feedback type='invalid'>
                        {meta.error}
                    </Form.Control.Feedback>
                </Form.Control>
            </Col>
        </Form>
    )
}

export default CustomInputField