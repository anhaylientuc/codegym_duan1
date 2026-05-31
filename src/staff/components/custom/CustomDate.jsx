import React from 'react'
import Form from 'react-bootstrap/Form'
import { Row, Col, Stack } from 'react-bootstrap'

const CustomDate = ({ values, setFieldValue }) => {
    return (

        <>
            <Col>
                <Form.Group
                    className='custom-form-group'
                >
                    <Form.Label >Từ ngày:</Form.Label>
                    <Form.Control

                        type='date'
                        name='from'
                        onChange={e => {
                            setFieldValue('from', e.target.value)
                        }}
                    >

                    </Form.Control>
                </Form.Group>
            </Col>

            <Col>
                <Form.Group
                    className='custom-form-group'
                >
                    <Form.Label>Đến ngày:</Form.Label>
                    <Form.Control
                        type='date'
                        name='to'
                        onChange={e => {
                            setFieldValue('to', e.target.value)
                        }}
                    >

                    </Form.Control>
                </Form.Group>
            </Col>


        </>


    )
}

export default CustomDate